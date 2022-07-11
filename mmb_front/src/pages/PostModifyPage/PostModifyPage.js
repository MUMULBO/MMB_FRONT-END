import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './PostModifyPage.css';

const PostModifyPage = () => {

    const selectFile = useRef("");
    const [detailImgs, setDetailImgs] = useState([]); // 이미지 url 담는 변수
    const [images, setImages] = useState();
    const [checkItemContent, setCheckItemContent] = useState(''); // 수정한 글 내용
    const [textareaHeight, setTextareaHeight] = useState(0);

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [image_src,setImg_src] = useState([]);
    const [token,setToken] = useState("")
    const [post_id,setPost_id] = useState(0);

    useEffect(()=>{
        //''http://127.0.0.1:8000/postapp/detail/{post_id+token}'
        axios.get('http://127.0.0.1:8000/postapp/detail/{post_id+token}')
        .then((res)=>{
            setTitle(res.data.title);
            setDescription(res.data.description);
            setImg_src(res.data.image_src);
            setPost_id(res.data.post_id);
        })
        .catch((err)=>{console.log(err)});
    },[]);

    const navigate = useNavigate();

    // 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
    // 엔터('\n') 개수를 세서 textareaHeight에 저장
    const checkItemChangeHandler = (event) => {
        setTextareaHeight(event.target.value.split('\n').length - 1);
        setCheckItemContent(event.target.value);
        setDescription(event.currentTarget.value);
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
        axios.post('http://127.0.0.1:8000/authapp/postapp/update', {
            title : title,
            description : description,
            image_src : image_src,
            token : token,
            post_id : post_id
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{console.log(err)});
        navigate("/");
    }
    
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
                <span></span>
                <div className ="p">
                    글 수정하기
                </div>
                <div className = "complete-button">
                    <button onClick={onClickModified} className = "button1">완료</button>
                </div>
            </div>
            <div className = "Modify-container">
                <div className ="Write-bigbox">
                    <input className="title-input" type='text' placeholder = {`${title}`}
                    onChange= {(e)=>{
                        setTitle(e.currentTarget.value);
                    }}></input>
                    <textarea
                        type='text'
                        className='text-area'
                        value={checkItemContent}
                        placeholder= {`${description}`}
                        onChange={checkItemChangeHandler}
                        style={{height: ((textareaHeight + 1) * 27) + 'px'}}/>
                    <div className = "preview">
                        {postList.imageArr.map((e,i)=>{
                            {e[i]}
                        })}
                    </div>
                    <input className="img-submit" type="file" multiple ref={selectFile} onChange={handleImageUpload}/>
                    <button className="button2" onClick={() => selectFile.current.click()}>
                        <img src='/img/image.png' style={{width:"20px"}}/>&nbsp;사진 첨부하기
                    </button>
                </div>

            </div>
        </>
        
    );
};

export default PostModifyPage;
