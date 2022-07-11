import React, { useEffect } from 'react';
import './MyPage.css';
import {useNavigate} from 'react-router-dom';


const MyPage = () => {

    useEffect(() => {
        // 화면 처음 렌더링 되자마자 axios로 내정보 받아오기
        // method : get
        // res : 내 정보
    }, []);

    const navigate = useNavigate();

    const goToMyPost = ()=> {
        navigate("/myPost")
    }

    const goToMyComment = ()=> {
        navigate("/myComment")
    }

    return (
        <div className='my_page'>
            <div className='my_page_quoin'>
                <div className='my_page_app_name'>
                    MUMULBO
                </div>
                <div className='my_page_contents'>
                    <div className = 'my_page_box'>
                        <div className='my_page_info'>
                            <div className='my_img'>
                                M
                            </div>
                            <div className='my_info'>
                                <div className='my_info_nick'>
                                    닉네임
                                </div>
                                <div className='my_info_major'>
                                    컴퓨터공학과
                                </div>
                            </div>
                            <div className='my_point'>
                                <div className='my_point_img'>
                                    P
                                </div>
                                <div className='my_point_count'>
                                    263
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my_page_menu'>
                        <div className='my_created_posts'>
                            <div className='my_created_toggle'>
                                ?
                            </div>
                            <button className='my_created' onClick={goToMyPost} >
                                내가 작성한 질문글
                            </button>
                        </div>
                        <div className='my_created_comments'>
                            <div className='my_created_toggle'>
                                <img src='/img/comment.png' style={{width:"25px"}}/>
                            </div>
                            <button className='my_created' onClick={goToMyComment}>
                                내가 작성한 댓글
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
