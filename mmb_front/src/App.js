import React from 'react';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage' //로그인페이지
import MyPage from './pages/MyPage/MyPage' //마이페이지
import PostDetail from './pages/PostDetailPage/PostDetailPage' //글상세페이지
import PostListPage from './pages/PostListPage/PostListPage'; //글목록페이지
import PostModifyPage from './pages/PostModifyPage/PostModifyPage' //글수정페이지
import PostWritePage from './pages/PostWritePage/PostWritePage';
import PostWrtiePage from './pages/PostWritePage/PostWritePage' //글작성페이지
import RegisterPage from './pages/RegisterPage/RegisterPage' //회원가입페이지

const App = () => {
  return (
    <Routes>
      <Route path = "/LoginPage" element = {<LoginPage/>}/>
      <Route path = "/RegisterPage" element = {<RegisterPage/>}/>
      <Route path = "/PostListPage" element = {<PostListPage/>}>
        <Route path = "/PostListPage/:pageId" element = {<PostDetail/>}/>
        {/* pageId:게시글 순번입니다! */}
      </Route>
      <Route path = "/PostModifyPage" element = {<PostModifyPage/>}/>
      <Route path = "/MyPage" element = {<MyPage/>}/>
      <Route path = "/PostWrtiePage" element = {<PostWritePage/>}/>
      <Route path = "*" element = {<p>잘못된 페이지입니다.</p>}/>
    </Routes>
  );
};

export default App;