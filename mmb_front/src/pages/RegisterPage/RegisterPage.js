import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from "axios";
import './RegisterPage.css'
import {useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const  navigate = useNavigate();
    const pwd_rule = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/;

    //닉네임 : NickName / 중복이 확인되면 NickDup을 통해 확인으로 변경
    const [NickName, setNickName] = useState("");
    const [NickDup,setNickDup] = useState("중복");

    //CerCode : 서버에서 받는 인증 코드 checkCerCode : 서버에서 
    const [CerCode,setCerCode] = useState("");
    const [checkCerCode, setCheckCerCode] = useState("");
    const [sameCode, setSameCode] = useState(false);

    const [Email,setEmail] = useState("");

    const [password,setPassword] = useState("");
    const [passwordAlert,setpasswordAlert] = useState("");
    const [passwordSame, setpasswordSame] = useState("");
    const [password2,setPassword2] = useState("");

    const [major_id,setMajor_id] = useState(0);

    const [isDuplicated, setIsDuplicated] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    const [isComplete, setIsComplete] = useState(false);

    const [Selected,setSelected] = useState("전자공학부");
    const selectList = ["전자공학부","건축학부","산업공학부","화학소재공학부","신소재공학부","기계공학과","기계설계공학과","기계시스템공학과",
    "토목공학과","컴퓨터공학과","컴퓨터소프트웨어공학과","인공지능공학과","광시스템공학과","메디컬IT융합공학과","환경공학과",
    "IT융합학과","수리빅데이터학과","화학생명과학과","경영학과"];

    const handleSelect = (e) => {
        setSelected(e.target.value);
        setMajor_id(e.currentTarget.selectedIndex + 2);
    };

        useEffect(()=>{
            if(password === password2){
                setIsPasswordConfirm(true);
            }
            else{ 
                setIsPasswordConfirm(false);
            }
        },[password,password2])

        useEffect(()=>{
            console.log(CerCode);
            console.log(checkCerCode);
            if(parseInt(CerCode) === parseInt(checkCerCode)){
                setSameCode(true);
            }
            else{
                setSameCode(false);
            }
        },[CerCode,checkCerCode])

    function nickname_check(){
        axios.post('http://127.0.0.1:8000/authapp/auth/nick_check', {
            nickname : NickName,
        }).
        then((res)=>{ 
            //isDuplicated : true;
            //setIsDuplicated(res.data.isDuplicated);
            setNickDup("확인")
            console.log(res);
        }).
        catch((err)=>{console.log(err)});
    }

    function email_check(){
        //이메일 전송
        axios.post('http://127.0.0.1:8000/authapp/auth/email_check', {
            email: Email,
        }).
        then((res)=>{
            //code : "123dsqs"
            setCerCode(String(res.data.code));
            console.log(res);
        }).
        catch((err)=>{console.log(err)});
    }

    function sign_up(){
        axios.post('http://127.0.0.1:8000/authapp/signup',{            
                nickname : NickName,
                email: Email,
                password: password,
                major_id: major_id,
                major: Selected,
        })
        .then((res)=>{
            setIsComplete(res.data.isComplete)
            navigate('/PostListPage')
            //글목록페이지로 넘어가기
        })
        .catch((err)=>{console.log(err)})
    }
    return (
        <div className='register-container'>
            <div className='register-form'>
            <div className = "MU">
                <p className = "MULBO">MUMULBO</p>
            </div>
            {/* 닉네임 확인 과정 */}
            <div className = "title">닉네임</div>
            <div className = "NickName">
                <div className = "NickNameCer">
                    <input className = "NickNameInput" placeholder = "  닉네임"
                    onChange = {(e)=>{setNickName(e.target.value)}}></input>
                    {/* testcode 나중에 지우기 */}
                    {console.log(NickName)}
                    <button className="register-btns" id="btn1" onClick = {()=>{
                        nickname_check();
                        }}>{NickDup}</button>
                </div>
            </div>

            {/* 이메일 확인 과정 */}
            <div className = "Email">
                <div className = "title">이메일</div>
                <div className = "EmailCer">
                    <input className = "email" placeholder = "  이메일"
                    onChange = {(e)=>{setEmail(e.target.value)}}></input>
                    {/* testcode 나중에 지울것 */}
                    {console.log(Email)}
                    <span className = "kumoh">@kumoh.ac.kr</span>
                    <button className="register-btns" id="btn2" onClick={()=>{
                        email_check();
                    }}>인증</button>
                </div>
            </div>
            
            {/* 인증 코드 확인 과정 */}
            <div className = "codeCer">
                    <input className = "code" placeholder = "인증코드"
                    onChange = {(e)=>{setCheckCerCode(e.target.value)}}></input>
                    {/* testcode 나중에 삭제하기 */}
                    {console.log(checkCerCode)}

                    {/* 인증버튼을 눌렀을 때 전달 받은 코드와 작성한 코드가 같다면 setSameCode 가 true 아니면 false */}
                    <button className="register-btns" id="btn3" onClick={()=>{
                        sameCode === true ? alert("인증성공") : alert("인증 실패");
                        //setIsEmail(true) : 이메일 인증 성공
                        setIsEmail(true);
                    }}>확인</button>
            </div>

            {/* 비밀번호 확인 과정 */}
            <div className = "Password">
                <div className = "title">패스워드</div>
                    <input type = "password" className = "password" placeholder = "   숫자, 영문, 특수문자 조합 최소 8자"
                    onChange = {(e)=>{
                        setPassword(e.currentTarget.value);
                        {console.log(password)}
                        {if(pwd_rule.test(password)){
                            setpasswordAlert("비밀번호 형식이 맞습니다!");
                            setIsPassword(true);
                        }
                        else{
                            setpasswordAlert("비밀번호 형식을 지켜주세요!");
                            setIsPassword(false);
                        }
                        }}}></input>
                        <div>{password}</div>
                        <div>{passwordAlert}</div>

                    <input type = "password" className = "password2" placeholder = "   비밀번호 재입력"
                    onChange={(e)=>{
                        setPassword2(e.currentTarget.value);
                        {console.log("1 :", password, "2 : ", password2)}
                        }}></input>
                        <div>{password2}</div>
                        <div>{passwordSame}</div>
            </div>

            {/* 전공 확인 과정 */}
            <div className = "Major">
                <div className = "title">전공</div>
                <select className = "selectBox" onChange={handleSelect} value={Selected}>
                            {selectList.map((item,i) => (
                            <option value={item} key={i}>
                                {console.log(Selected)}
                                {item}
                            </option>))}
                </select>
            </div>

            {/* 회원 등록 과정 */}
            {/* 버튼 눌렀을 때 닉네임 인증, 이메일 인증, 비밀번호 인증이 끝났을 시 회원 등록 요청 */}
            <button className="register-btns Register" type = "submit" 
            onClick={()=>{
                if(isEmail && isPassword && isPasswordConfirm){
                        sign_up();
                    }
                    else{
                        if(!isEmail){
                            alert("이메일이 올바르지 않습니다.");
                        }
                        else if(!isPassword){
                            alert("비밀번호 형식이 올바르지 않습니다.");
                        }
                        else if(!isPasswordConfirm){
                            alert("비밀번호가 같지 않습니다.");
                        }
                        else{
                            alert("뭔가가 잘못됬습니다...");
                        }}
                    }}>가입완료</button>
                </div>
            </div>
        );
    };

export default RegisterPage;
