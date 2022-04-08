import React,{ useState } from 'react';
import './formpage-css.css';
import {useNavigate} from "react-router-dom";

function Form_login(){
    // ("div#error_alert").hide();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const [show5,setShow5] = useState(false);
    const [show6,setShow6] = useState(false);
    const [show7,setShow7] = useState(false);
    let history = useNavigate();
    // console.log(username);
    const onSubmit=(e)=>{
        e.preventDefault();
        if(username ==='cekmitl' && password ==='ecc56789'){
        console.log(username,password);
        history({ pathname: '/welcome' })
        }
        else if(username ==='' && password ===''){
            setShow(true);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setShow6(false);
            setShow7(false);
        }
        else if(username ==='cekmitl' && password ===''){
            setShow2(true);
            setShow(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setShow6(false);
            setShow7(false);
        }
        else if(username !='cekmitl' && username!='' && password ===''){
            setShow3(true);
            setShow(false);
            setShow2(false);
            setShow4(false);
            setShow5(false);
            setShow6(false);
            setShow7(false);
        }
        else if(username ==='' && password === 'ecc56789'){
            setShow4(true);
            setShow(false);
            setShow2(false);
            setShow3(false);
            setShow5(false);
            setShow6(false);
            setShow7(false);
        }
        else if(username ==='' && password != 'ecc56789' && password != ''){
            setShow5(true);
            setShow(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow6(false);
            setShow7(false);
        }
        else if(username ==='cekmitl' && password != '' && password != 'ecc56789'){
            setShow6(true);
            setShow(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setShow7(false);
        }
        else if(username !='cekmitl' && username!='' && password === 'ecc56789'){
            setShow7(true);
            setShow(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(false);
            setShow6(false);
        }
    }
    return(
        <div className="Form">
            <form id='Formcontrol' onSubmit={onSubmit}>
            <h1 className="logintitle">Login Form</h1>
            {show && <div className='error-message'>Please enter username and password!</div>}
            {show2 && <div className='error-message'>Please enter your password!</div>}
            {show3 && <div className='error-message'>Please enter your password!</div>}
            {show4 && <div className='error-message'>Please enter your username!</div>}
            {show5 && <div className='error-message'>Please enter your username!</div>}
            {show6 && <div className='error-message'>Please enter valid username and password!</div>}
            {show7 && <div className='error-message'>Please enter valid username and password!</div>}
            <ul>
                <li>
                    <p className='content'>Username</p>
                    <input className='contentinput' id="username" type={"text"} onChange={(e)=>{setUsername(e.target.value)}}></input>
                </li>
                <li>
                    <p className='content'>Password</p>
                    <input className='contentinput' id="password" type={"password"} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </li>
                <li>
                    <button className='buttsubmit' type='submit'>เข้าสู่ระบบ</button>
                </li>
            </ul>
            </form>
        </div>

    );
}
export default Form_login;