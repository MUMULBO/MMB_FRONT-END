import React from 'react';
import './MyPost.css';
import PostList from '../../component/postForm/postForm';

const Mypost = () => {
    return (
        <div className = 'my_post'>
            <div className = 'my_post_box'>
                <div className = 'my_post_title'>
                    내가 작성한 질문글
                </div>
                <div className = "my_post_list">
                    <PostList/>
                    <PostList/>
                    <PostList/>
                    <PostList/>
                    <PostList/>
                </div>
            </div>
           
        </div>
    );
};

export default Mypost;