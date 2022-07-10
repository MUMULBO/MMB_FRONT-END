import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const handleId = (e) => {
        setId(e.currentTarget.value);
    }

    const handlePw = (e) => {
        setPw(e.currentTarget.value);
    }

    const onClickLogin = () => {
        // axios로 로그인 정보 보내고 결과값 받기
        // method : post
        // req : 이메일, 비밀번호, 로그인유지 여부
        // res : 로그인 성공 여부 (true or false), 토큰
        // 로그인 성공시 화면 이동
    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    }

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
                    <div>
                        <input type='checkbox' defaultChecked={isChecked} onClick={handleCheckBox}></input>
                        <span style={{fontSize: "12px"}}>로그인 유지</span>
                    </div><br/>
                    <button className='login-signup' onClick={onClickSignup}>회원가입</button>
                </div>
            </div>  
        </div>
    );
};

export default LoginPage;