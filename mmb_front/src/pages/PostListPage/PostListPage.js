import React, { useEffect } from 'react'
import {useState} from 'react'
import './PostListPage.css'
import {Link } from 'react-router-dom';
import axios from 'axios'

//props로 useEffect의 값을 내려받으면 값이 변경되지 않을 수 있으므로 확인 요망!

const PostListPage = () => {

    // 검색 모달창 false : 숨기기 true : 나오기
    let [serach, setSearch] = useState(false);

     // postList : 화면에 표시될 글목록.
    let [postList, setPostList] = useState([]);
    //  setPostList롤 최신순으로 정렬된 데이터로 postList 생성
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setPostList(res.data)})
        .catch((err)=>{console.log(err)});
    },[]);

    // input : 검색창 입력데이터
    let [input,setInput] = useState(""); 

    return (
        <div className='Post-List-Box'>
            {/* //헤더부분 */}
            <header className = "head">
                {/* 최신, 포인트순 필터 */}
                <Filter1 postList = {postList} setPostList = {setPostList} input = {input} setInput = {setInput}/>

                {/* 제목 */}
                <div className = "MUMULBO">MUMULBO</div>

                <div className = "icon">
                    {/* 검색버튼 클릭시 학과/일상 필터 및 검색창 등장 */}
                    <div onClick = {(e)=>{
                            e.stopPropagation();
                            setSearch(!serach);
                        }}><img src = "images/Search.png"></img></div>

                    {/* 설정/마이페이지 클릭시 이동하기 */}
                    <div>
                        <Link to ="/MyPage"><img src = "images/Settings.png"/></Link>
                    </div>
                </div>
            </header>

            {/* Search 부분! 검색버튼을 누르면 등장 다시 누르면 퇴장*/}
            {serach == true ? <Search postList = {postList} setPostList = {setPostList} input = {input} setInput = {setInput}/>: null}

            {/* 글목록 필터링된 postList가 출력 해당하는 내용이 없을 경우 "불러올 글이 없습니다" 출력!*/}
            {postList.length !== 0 ? <List postList = {postList}/> : "불러올 글이 없습니다."}

            {/* 질문하기 버튼 글작성페이지로 Navigate!*/}
            <Link to = "/post"><button className = 'post'>질문하기</button></Link>
        </div>
    );
};

function Filter1(props){ //디폴트가 최신순으로 선택시 postList 바꾸기 // props로 postList와 input값을 받음

    // radioSelected : 최신순 혹은 포인트순 중 선택된 값 초기값은 recent // recent / point 
    const [radioSelected, setRadioSelected] = useState("recent");
    //console.log(radioSelected);//test code 나중에 삭제하기!!

    // radioSelected 값이 변경되었을 경우 해당 값을 radioSelected로 최신화
    const useHandleClickRadioButton = (e) =>{
        setRadioSelected(e.target.value);
        console.log(e.target.value); //test code 나중에 삭제하기!!

        // radioSelected가 point 값이면 point순 정렬 데이터 요청
        if(e.target.value === "point"){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{props.setPostList(res.data); console.log('point순으로 최신화')})
            .catch((err)=>{console.log(err)});
        }
        // radioSelected가 recent 값이면 recent순 정렬 데이터 요청
        else if(e.target.value === "recent"){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{props.setPostList(res.data); console.log('recent순으로 최신화')})
            .catch((err)=>{console.log(err)});
        }
        // recent / point 값이 아닌 값이 들어왔을때 오류 문장 출력...
        else{
            console.log("Error : 뭔가가 잘못되었습니다...ㅠㅠ");
        }
    }
    return(
        <div id='post-list-header-container'>
        {/* 최신순 포인트순 선택 */}
            <div className = "filter1" id = "align">
                <form id = "align">
                    <input 
                        id = "recentRadios"
                        className = "btn"
                        type="radio" 
                        name="recent" 
                        value="recent"
                        checked = {radioSelected === "recent"}
                        onChange = {useHandleClickRadioButton}
                    />
                    <label for = "recentRadios">최신순</label>
                    <input 
                        id = "pointRadios"
                        className = "btn"
                        type="radio" 
                        name="point" 
                        value="point"
                        checked = {radioSelected === "point"}
                        onChange = {useHandleClickRadioButton}
                    />
                    <label for = "pointRadios">포인트순</label>
                </form>
            </div>
        </div>
    );
}

// 검색 컴포넌트 일상,학과 필터링/ 검색창
function Search(props){ // props : postList, inputList

     //2차필터링 선택된 값 : Selected / 일상, 학과..
    const [Selected, setSelected] = useState("All");

    //selectList : 일상, 학과 카테고리 // 이것도 데이터를 받나????
    //확인 필요!!!!!!
    //const [selectList, setSelectList] = useState([]);

    const selectList =
    ["일상","전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

     //Seleted값이 바뀌었을 때 해당 값으로갱신
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    return(
        <>  
            <div className = "Search">
                    {/* 일상 및 학과 선택 */}
                    <div className = "filter2"> 
                        <select className = "select-box" onChange={handleSelect} value={Selected}>
                            <option value = "All">전체</option>
                            {selectList.map((item,i) => (
                            <option value={item} key={i}>
                                {console.log(Selected)}
                                {item}
                            </option>))}
                        </select>
                    </div>

                <div className = "SearchBar">
                    {/* //검색창 입력데이터 input : 검색창에 입력된 값*/}
                    <input className = "searchbar" placeHolder = "무엇이든 물어보세요!" onChange = {(e)=>{props.setInput(e.target.value)}} ></input>
                    {console.log(props.input)}
                </div>
                <div className = "SearchIcon">
                    {/* 버튼이 눌리면 Selected값과 input값 Post하고 */}
                    <img onClick = {()=>{
                        //testcode!!
                        console.log(Selected);
                        console.log(props.input);
                        axios({
                            method: 'post',
                            url : 'https://jsonplaceholder.typicode.com/posts',
                            data:{
                                catergory : Selected,
                                input : props.input,
                            },
                            headers:{
                                'ContentType' : 'application/json'
                            },
                        })
                        //성공 시 필터링 된 리스트를 반환!
                        .then((res)=>{props.setPostList(res)})
                        .catch((error)=>{console.log(error)})
                    }} src = "images/Search2.png"></img>
                </div>
            </div>
        </>
    );
}

function List(props){
    return(
        <div className = "Lists">
            {/* 상위에서 필터링된 데이터를 props로 받아서 출력 디폴트가 전체 */}
                {
                    props.postList.map((e,i)=>{
                        return(
                            <div  className = "List" key = {i} onClick ={()=>{
                                //해당 상세피이지로 이동
                                console.log(i);
                            }}>
                                <div className = "ListNum">3{e.point}</div>
                                <div className = "ListContent">
                                    <ul className = "ListList">
                                        {/* //나중에 데이터형식 확인하고 수정할 부분 */}
                                        <li>대학수학 과제 도와주실분 있나요 ㅠㅠ{e.title}</li>
                                        <li>올해 4학년인데요 제가 문과 출신이라 그런지 너무 힘들더..{e.내용}</li>
                                        <div className = "ListLast">
                                            <div className = "ListLast2">
                                                <li>컴퓨터공학과{e.catergory}</li>
                                                <div className = "detail">
                                                    <li><img src = "images/JPG.png"  className = "imageIcon"/>{e.countJPG}2</li>
                                                    <li><img src = "images/Comment.png"/>{e.countComment}14</li>
                                                    <li>07-07 15:34{e.date}</li>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                )})                    
                }
            </div>
    );
}
export default PostListPage;