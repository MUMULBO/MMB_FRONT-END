import React, {useEffect, useState} from 'react';
import './PostDetailPage.css';
// import ScrollHorizontal from 'react-scroll-horizontal';
import Comment from '../../component/comment/comment';

const PostDetailPage = () => {

    const imageArr = ["이미지 1", "이미지 2"];
    const [isChecked, setIsChecked] = useState(false);
    const [comment, setComment] = useState("");

    const onClickFunc = () => {
        // : 버튼 눌렀을 때
        // 작성자일 때 : 수정, 삭제 / 작성자 아닐때는 버튼 없애기

    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    }

    const handlerInput = (e) => {
        setComment(e.currentTarget.value);
    }

    useEffect(() => {
        // 글 조회 요청
        // method : get
        // 보내는 값 : 게시물 id
        // 받는 값 : 게시물 상세정보

        // 댓글 조회 요청
    }, []);

    return (
        <div className='detail-page-container'>
            <div className='detail-rest'>
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
                                <span id='writeTime'>&nbsp;&nbsp;&nbsp;07-07 15:34</span>
                                <div id='detail-post-title'>대학수학 과제 도와주실 분 있나요 ㅜ ㅜ</div>
                            </div>
                        </div>
                        <div className='detail-post-content'>
                            올해 4학년인데요 제가 문과 출신이라 그런지 너무 힘들더라고요,, 혹시 문제 풀이 보고 조언만 부탁드려도 될까요?
                        </div>
                        <div className='scroll-horizontal'>
                            {/* <ScrollHorizontal> */}
                                {/* 이미지 배열 넣기 */}
                            {/* </ScrollHorizontal> */}
                        </div>
                    </section>
                    <br/>
                    <section className='detail-comment'>
                        <img src='/img/comment.png'></img>
                        <span>&nbsp;&nbsp;16</span>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </section>
                </div>
            </div>
            <section className='search-bar'>
                <div id="detail-checkano">
                    <input type='checkbox' defaultChecked={isChecked} onClick={handleCheckBox}></input>
                    <span style={{color: "#ffffff"}}>익명</span>
                </div>
                <div id="detail-inputBox">
                    <input value={comment} onChange={handlerInput} className='detail-input-bar'/>
                </div>
                <button>
                    입력
                </button>
            </section>
        </div>
    );
};

export default PostDetailPage;