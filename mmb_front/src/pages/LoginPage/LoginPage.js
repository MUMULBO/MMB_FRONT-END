import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios'

const LoginPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();

    const handleId = (e) => {
        setId(e.currentTarget.value);
    }

    const handlePw = (e) => {
        setPw(e.currentTarget.value);
    }

    const onClickLogin = () => {
        axios.post('http://127.0.0.1:8000/authapp/login',{
            email : id,
            password : pw
        })
        .then((res)=>{
            //로그인 성공 시 토큰 저장 및 화면 이동
            localStorage.setItem('login-token',res.data.token)
            navigate('/')
        })
        .catch((err)=>{console.log(err)})
    }

    // const handleCheckBox = () => {
    //     setIsChecked(!isChecked);    
    // }

    const onClickSignup = () => {
        navigate("/register");
    }

    return (
        <div>
            <div className='login-container'>
                <div className='login-form'>
                    <div className='login-logo'>MUMULBO</div>
                    <br/>
                    <input className='login-inputs' placeholder='   이메일' value={id} onChange={handleId}/>
                    <input className='login-inputs' placeholder='   비밀번호' value={pw} onChange={handlePw}/>
                    <button className='login-login' onClick={onClickLogin}>로그인</button>
                    {/* <div>
                        <input type='checkbox' defaultChecked={isChecked} onClick={handleCheckBox}></input>
                        <span style={{fontSize: "12px"}}>로그인 유지</span>
                    </div><br/> */}
                    <button className='login-signup' onClick={onClickSignup}>회원가입</button>
                </div>
            </div>  
        </div>
    );
};

export default LoginPage;