import React, {useEffect, useRef, useState} from 'react';
import './PostModifyPage.css';



const PostModifyPage = () => {

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
            <div className = "Header">
                <div className ="p">
                    글 수정하기
                </div>
                <div className = "complete-button">
                    <button className = "button1">완료</button>
                </div>
            </div>
            <div className ="Write-bigbox">
                <input className="title-input" type='text' placeholder='제목'></input>
                <input className="text-area" type='text'  placeholder='내용'></input>
                <div className = "preview">
                    <div className = "imgs">
                        {images} 
                    </div>   
                </div>
                <input className="img-submit" type="file" multiple ref={selectFile} onChange={handleImageUpload}/>
                <button className="button2" onClick={() => selectFile.current.click()}>사진 첨부하기</button>
                
            </div>

        </div>
        
    );
};

export default PostModifyPage;
