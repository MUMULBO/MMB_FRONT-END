import React, {useState} from 'react';
import './MyPost.css';
import PostList from '../../component/postForm/postForm';
import axios from 'axios'


const Mypost = () => {
    const [mypostarr, setMypostarr] = useState([]);

    const handleMypostarr = (e) => {
        setMypostarr(e.currentTarget.value);
    }

    useEffect(()=>{
        axios.post()
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


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