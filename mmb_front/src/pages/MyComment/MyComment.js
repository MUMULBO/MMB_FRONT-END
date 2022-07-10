import React from 'react';
import './MyComment.css';
import CommentForm from '../../component/commentForm/commentForm';

const Mycomment = () => {
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