import React from 'react';
import './PostWritePage.css';
import {useState,useRef,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const PostWritePage = () => {

    //전공선택
    const [Selected, setSelected] = useState("");
    //익명선택
    const [is_anony,setis_anony] = useState(false);
    //제목
    const [title,setTitle] = useState("");
    //내용
    const [description,setDescription] = useState("");
    //이미지 배열
    const [img_src,setImg_src] = useState([]);
    //토큰
    const [token,setToken] = useState([]);
    //사용자 사용 포인트
    const [post_point,setPost_point] = useState(1);
    //글 작성 완료 여부
    const [is_post,setIs_post] = useState(false);
    //전공 아이디값
    const [major_id,setMajor_id] = useState(1);
    //사용자 보유 포인트
    const [user_point,setUser_point] = useState(0);
    //페이지 시작 시 사용자 보유 포인트 가져오기
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/postapp/upload/form')
        .then((res)=>{setUser_point(res.data.point)})
        .catch((err)=>{console.log(err)})
    },[]);

    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    const pointList = [1,2,3,4,5,6,7,8,9,10];

    //Seleted값이 바뀌었을 때 해당 값으로갱신 + major_id 값 설정 일상 : 1 ~
    const handleSelect = (e) => {
            setSelected(e.target.value);
            setMajor_id(e.currentTarget.selectedIndex);
            console.log(e.currentTarget.selectedIndex);
        };

    //이미지 코드
    const selectFile = useRef("");
    const [detailImgs, setDetailImgs] = useState([]); // 이미지 url 담는 변수
    const [images, setImages] = useState();

    // 
    const [checkItemContent, setCheckItemContent] = useState(''); // 수정한 글 내용
    const [textareaHeight, setTextareaHeight] = useState(0);
    const navigate = useNavigate();
    
    const checkItemChangeHandler = (event) => {
        setTextareaHeight(event.target.value.split('\n').length - 1);
        setCheckItemContent(event.target.value);
    }

    const handleImageUpload = (e) => {
        const fileArr = e.target.files;
        let fileURLs = [];
        let file;
        let filesLength = fileArr.length > 5 ? 5 : fileArr.length;
        
        for (let i = 0; i < filesLength; i++) {
            file = fileArr[i];
            
            let reader = new FileReader();
            reader.onload = () => {
                //console.log(reader.result);
                fileURLs[i] = reader.result;
                setDetailImgs([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
    };

    // 완료 시 호출되는 함수
    const onClickModified = () => {
        //토큰 localStorage에서 가져오기!
        token = localStorage.getItem('login-token');
        axios.post('http://127.0.0.1:8000/postsapp/upload/post',{
            title : title,
            description : checkItemContent,
            image_src : img_src,
            major_id : major_id,
            is_anony : is_anony,
            token : token,
            post_point : post_point
    })
    .then((res)=>{
        //이후 수정할 부분
        setIs_post(true);
        navigate("/detail");
    })
    .catch((err)=>{
        console.log(err);
        setIs_post(false);
    })}
    
    useEffect(() => {
        const imgArr = [];
        detailImgs.map((ele)=>{
                imgArr.push(
                        <div className='file-img-box'>
                            <img className = "file-img" src={ele}></img>
                            <button className ="remove-Button" value={ele} onClick = {removeImage}>X</button>
                        </div>
                    );
            }
        );
        setImages(imgArr);
    }, [detailImgs]);

    const removeImage = (e) => {
        setDetailImgs(detailImgs.filter(image => image != e.target.value));
    };

    console.log(detailImgs);

    return (
        <>
            <div className = "Header">
                <div><input type='checkbox' name='anonymous' value='anonymous'
                    onChange={((e)=>{
                        e.target.checked ? setis_anony(true) : setis_anony(false);
                    })}/><span className = "ano">익명</span></div>
                <div className ="p">
                    글 작성하기
                </div>
                <div className = "complete-button">
                    <button onClick={onClickModified} className = "button1">완료</button>
                </div>
            </div>
            <div className = "Modify-container">
                {/* 카테고리 선택 */}
                <select className = "select" onChange={handleSelect} value={Selected}>
                        <option disabled>카테고리 선택</option>
                        {selectList.map((item,i) => (
                        <option value={item} key={i}>
                        {console.log(Selected)}
                        {item}
                    </option>))}
                </select>
                <div className ="Write-bigbox">
                    <input className="title-input" type='text' placeholder='제목' 
                    onChange={(e)=>{setTitle(e.currentTarget.value)}}></input>
                    {console.log(title)}
                    <textarea
                        type='text'
                        className='text-area'
                        value={checkItemContent}
                        placeholder={'글 작성하기'}
                        onChange={checkItemChangeHandler}
                        style={{height: ((textareaHeight + 1) * 27) + 'px'}} 
                    />
                    {console.log(checkItemContent)}
                    <div className = "preview">
                        {images}  
                    </div>
                    <input className="img-submit" type="file" multiple ref={selectFile} onChange={handleImageUpload}/>
                    <button className="button2" onClick={() => selectFile.current.click()}>
                        <img src='/img/image.png' style={{width:"20px"}}/>&nbsp;사진 첨부하기
                    </button>
                    {/* 포인트부분 */}
                    <div className = "footer">
                        <div className = "PointDiv">
                            <div className = "PointIcon">P</div>
                            <div className = "PointContent">
                                <div className = "pointpoint">
                                <select className = "pointSelect" 
                                    onChange={(e)=>{
                                        setPost_point(e.currentTarget.value)
                                        console.log(post_point)
                                    }}>
                                    {pointList.map((item,i) => (
                                    <option value={item} key={i}>
                                        {console.log(Selected)}
                                        {item}
                                    </option>))}
                                </select>
                                    <span className = "point"></span>
                                </div>
                                <p className = "nowPoint">{`보유 포인트 ${user_point}point`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostWritePage;