import React from 'react';
import './PostDetailPage.css';
import ScrollHorizontal from 'react-scroll-horizontal';
import Comment from '../../component/comment/comment';

const PostDetailPage = () => {

    const imageArr = ["이미지 1", "이미지 2"];
    const onClickFunc = [];

    

    return (
        <>
            <section className='detail-header'>
                <div></div>
                <span>컴퓨터공학과</span>
                <button onClick={onClickFunc}><img src="/img/dot.png" alt="이미지 없음"></img></button>
            </section>
            <div className='detail-container'>
                <section className='detail-content'>
                    <div className='detail-title'>
                        <div id='point'>3</div>
                        <div>
                            <span id='nickName'>닉네임</span>
                            <span id='writeTime'>    07-07 15:34</span>
                            <div id='detail-post-title'>대학수학 과제 도와주실 분 있나요 ㅜ ㅜ</div>
                        </div>
                    </div>
                    <div className='detail-post-content'>
                        올해 4학년인데요 제가 문과 출신이라 그런지 너무 힘들더라고요,, 혹시 문제 풀이 보고 조언만 부탁드려도 될까요?
                    </div>
                    <div className='scroll-horizontal'>
                        <ScrollHorizontal>
                            {/* 이미지 배열 넣기 */}
                        </ScrollHorizontal>
                    </div>
                </section>
                <br/>
                <section className='detail-comment'>
                    <div className='comment-info'>
                        <img src='/img/comment.png'></img>
                        <span>16</span>
                        
                    </div>
                    <Comment/>
                </section>
                <section className='search-bar'>
                    <div>
                        익명여부
                    </div>
                    <div>
                        입력창
                    </div>
                    <div>
                        사진
                    </div>
                    <button>
                        버튼
                    </button>
                </section>
            </div>
        </>
    );
};

export default PostDetailPage;