import React from 'react';
import './comment.css'
// import check from './img/check.png';
// import icon from './img/icon1.png';
// import dot from './img/dot.png';

// 상세페이지 댓글 하나
const comment = () => {
    return (
        <>
            <div className = "commentBox">
                {/* <img className = "check" src='/img/c'></img> */}
                <div className = "userCommentBox">
                    <div className = "commentTitle">
                        <span className = "userName">홍길동</span>
                        <span className = "date">07-07</span>
                        <span className = "time">15:34</span>
                    </div>
                    <p className = "userComment">책 봐보셨어요?</p>
                </div>
                <div className ="commentIcon">
                    <div className = "rightBox">
                        <div className = "dotBox">
                            <img className = "dot1" src='/img/dot.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default comment;