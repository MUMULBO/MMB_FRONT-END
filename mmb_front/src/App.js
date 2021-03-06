import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage' //로그인페이지
import MyPage from './pages/MyPage/MyPage' //마이페이지
import PostDetail from './pages/PostDetailPage/PostDetailPage' //글상세페이지
import PostListPage from './pages/PostListPage/PostListPage'; //글목록페이지
import PostModifyPage from './pages/PostModifyPage/PostModifyPage' //글수정페이지
import PostWritePage from './pages/PostWritePage/PostWritePage'; //글작성페이지
import RegisterPage from './pages/RegisterPage/RegisterPage'; //회원가입페이지
import MyPost from './pages/MyPost/MyPost'; //내가쓴글페이지
import MyComment from './pages/MyComment/MyComment'; //내가쓴댓글페이지

const App = () => {
  return (
    <Routes>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/register" element = {<RegisterPage/>}/>
      <Route path = "/" element = {<PostListPage/>}/>
      <Route path = "/detail" element = {<PostDetail/>}/>
      {/* pageId:게시글 순번입니다! */}
      <Route path = "/modify" element = {<PostModifyPage/>}/>
      <Route path = "/myPage" element = {<MyPage/>}/>
      <Route path = "/postWrite" element = {<PostWritePage/>}/>
      <Route path = "/myPost" element = {<MyPost/>}/>
      <Route path = "/myComment" element = {<MyComment/>}/>
      <Route path = "*" element = {<p>잘못된 페이지입니다.</p>}/>
    </Routes>
  );
};

export default App;