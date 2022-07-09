import React, {useState} from 'react';
import './LoginPage.css';

const LoginPage = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleId = (e) => {
        setId(e.currentTarget.value);
    }

    const handlePw = (e) => {
        setPw(e.currentTarget.value);
    }

    return (
        <div>
            <div className='login-container'>
                <div className='login-form'>
                    <div className='login-logo'>MUMULBO</div>
                    <br/>
                    <input className='login-inputs' placeholder='   이메일' value={id} onChange={handleId}/>
                    <input className='login-inputs' placeholder='   비밀번호' value={pw} onChange={handlePw}/>
                    <button className='login-login'>로그인</button>
                    <div>
                        <input type='checkbox' defaultChecked={true}></input>
                        <span style={{fontSize: "12px"}}>로그인 유지</span>
                    </div><br/>
                    <button className='login-signup'>회원가입</button>
                </div>
            </div>  
        </div>
    );
};

export default LoginPage;