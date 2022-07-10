import React, {useEffect} from 'react';
import './commentForm.css';
// import checkk from '../../../public/img/check.png'


const commentForm = () => {
    return (
        
        <div className = "mycommentBigbox">
            <div className = 'mycommentbox'>
                <img className = 'check' src="img/check.png"></img>
            </div>
            <div className = 'comment_middle'>
                <div className = 'comment_middle_top'>
                    <div calssName = 'comment_post'>작성한 댓글</div>
                    <div className = 'right_datetime'>
                        <div className = 'comment_date'>07-07</div>
                        <div className = 'comment_time'>15:34</div>
                    </div>
                </div>
                <div className = 'post_title'>작성한 댓글의 질문글 제목</div>
            </div>
            
        </div>
        
    );
};

export default commentForm;