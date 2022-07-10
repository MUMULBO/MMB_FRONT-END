import React from 'react';
import './postForm.css';

const postForm = () => {
    return (
        <div className = "mypostBigbox">
            <div className = "topBox">
                <img className = 'postcheck' src="img/check.png"></img>
            </div>
            <div className = "write">
                <div className = 'mypostbox'>
                    <div className = 'post_middle'>
                        <div className = 'post_middle_top'>
                            <div calssName = 'post_title'>대학수학 과제 도와주실 분 있나요ㅜㅜ</div>
                        </div>
                        <div className = 'post_content'>올해 4학년인데요 제가 문과 출신이라 그런지 너무 힘들더...</div>
                    </div>
                </div>
                <div className = "post_smallbox">
                    <div className ='user_category'>컴퓨터공학과</div>
                    <div className = 'post_Icon'>
                        <img className = 'comment_Icon' src = "img/comment.png"/>
                        <div className = 'commentcnt'>10</div>
                        <div className = 'post_date'>07-07&nbsp;</div>
                        <div className = 'post_time'>15:34</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default postForm;