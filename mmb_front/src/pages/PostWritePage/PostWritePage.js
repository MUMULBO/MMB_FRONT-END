import React from 'react';
import './PostWritePage.css';
import {useState,useRef,useEffect} from 'react'
import axios from 'axios';

const PostWritePage = () => {

    //전공선택
    const [Selected, setSelected] = useState("");
    //익명선택
    const [is_anony,setis_anony] = useState(true);
    //제목
    const [title,setTitle] = useState("");
    //내용
    const [description,setDescription] = useState("");
    //이미지 배열
    const [img_src,setImg_src] = useState([]);
    //토큰
    const [token,setToken] = useState([]);
    //포인트
    const [post_point,setPost_point] = useState(1);
    //글 작성 완료 여부
    const [is_post,setIs_post] = useState(false);

    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    const pointList = [1,2,3,4,5,6,7,8,9,10];

    //Seleted값이 바뀌었을 때 해당 값으로갱신
    const handleSelect = (e) => {
            setSelected(e.target.value);
        };

    //이미지 코드
    const selectFile = useRef("");
    const [detailImgs, setDetailImgs] = useState([]); // 이미지 url 담는 변수
    const [images, setImages] = useState();
    
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

    // console.log(detailImgs);
    
    useEffect(() => {
        const imgArr = [];
        detailImgs.map((ele)=>{
                imgArr.push(
                        <div className='file-img-box'>
                            <img className = "file-img" src={ele}></img>
                            <button className ="remove-Button" value={ele} onClick = {removeImage}>❌</button>
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
        <div className = "Modify-container">
            <div className = "head">
                <div><input type='checkbox' name='anonymous' value='anonymous'
                onChange={((e)=>{
                    e.target.checked ? setis_anony(true) : setis_anony(false);
                })}/><span class = "ano">익명</span></div>
                <div className = "MUMULBO">글 작성하기</div>
                <button className = "complete" onClick={()=>{
                    axios({
                        method : 'post',
                        //임의 url
                        url : 'https://jsonplaceholder.typicode.com/posts',
                        data : {
                            title : title,
                            description : description,
                            image_src : img_src,
                            major_id : Selected,
                            is_anony : is_anony,
                            token : token,
                            post_point : post_point
                        }
                    })
                    .then((res)=>{
                        //이후 수정할 부분
                        setIs_post(true);
                    })
                    .catch((err)=>{
                        console.log(err);
                        setIs_post(false);
                    })
                }}>완료</button>
            </div>
            {/* 카테고리 선택 */}
            <select className = "select" onChange={handleSelect} value={Selected}>
                <option>카테고리 선택</option>
                    {selectList.map((item,i) => (
                    <option value={item} key={i}>
                    {console.log(Selected)}
                    {item}
                </option>))}
            </select>
            {/* 제목
            <input className = "title" type = "text" placeholder='제목'
            onChange={(e)=>{
                setTitle(e.currentTarget.value);
                console.log(title);
            }}></input> */}
            {/* 질문 내용 */}
            {/* <input className = "question" type = "textArea" placeholder='질문을 입력해주세요'
            onChange={(e)=>{
                setDescription(e.currentTarget.value);
                console.log(description);
            }}></input> */}

            {/* 민경님 코드로 대체 */}
            <div className ="Write-bigbox">
                <input className="title-input" type='text' placeholder='제목'></input>
                <input className="text-area" type='text'  placeholder='내용'></input>
                <div className = "preview">
                    <div className = "imgs">
                        {images} 
                    </div>   
                </div>
                <input className="img-submit" type="file" multiple ref={selectFile} onChange={handleImageUpload}/>
                <button className = "imgBtn" onClick={() => selectFile.current.click()}><img src = "./JPG.png"  className = "imageIcon"/>사진 첨부하기</button>
            </div>
            {/* 이미지코드 */}

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
                        <p className = "nowPoint">{`현재 포인트 ${post_point}point`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostWritePage;