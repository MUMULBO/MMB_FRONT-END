import React,{Component} from 'react';
import './comment.css'
import checkk from './img/check.png';
import icon from './img/icon1.png';
import dot from './img/dot.png';

const comment = () => {
    return (
        <>
            <div className = "commentBox">
                <img className = "check" src={checkk}></img>
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
                        <img className = "icon1" src={icon}></img>
                        <div className = "dotBox">
                            <img className = "dot1" src={dot}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default comment;