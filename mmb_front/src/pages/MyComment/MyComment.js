import React, {useState, useEffect} from 'react';
import './MyComment.css';
import CommentForm from '../../component/commentForm/commentForm';
import axios from 'axios'

const Mycomment = () => {
    const [mycommentarr, setMycommentarr] = useState([]);

    const handleMycommentarr = (e) => {
        setMycommentarr(e.currentTarget.value);
    }

    useEffect(()=>{
        axios.post()
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className ='my_comment'>
            <div className = 'my_comment_box'>
                <div className = 'my_comment_title'>
                    내가 작성한 댓글
                </div>
                <div className = "my_comment_list">
                    <CommentForm/>
                    <CommentForm/>
                    <CommentForm/>
                    <CommentForm/>
                    <CommentForm/>
                    <CommentForm/>
                </div>
            </div>
        </div>
    );
};

export default Mycomment;