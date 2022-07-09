import React, { useEffect } from 'react';
import './MyPage.css';

const MyPage = () => {

    useEffect(() => {
        // 화면 처음 렌더링 되자마자 axios로 내정보 받아오기
        // method : get
        // res : 내 정보
    }, []);

    return (
        <div className='my_page'>
            <div className='my_page_quoin'>
                <div className='my_page_app_name'>
                    MUMULBO
                </div>
                <div className='my_page_contents'>
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
                    <div className='my_page_menu'>
                        <div className='my_created_posts'>
                            <div className='my_created_toggle'>
                                ?
                            </div>
                            <div className='my_created_title'>
                                내가 작성한 질문글
                            </div>
                        </div>
                        <div className='my_created_comments'>
                            <div className='my_created_toggle'>
                                -
                            </div>
                            <div className='my_created_title'>
                                내가 작성한 댓글
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
