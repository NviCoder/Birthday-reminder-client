import React , { useState }  from 'react';
import LoginL from '../LoginAndRegister/LoginL'
import { Button } from '../../components/Button.style';

  
function Login(props) {

    const { handleChangeLogin, handleSubmitLogin} = LoginL(props); 
    
    return (
            <div className="front">
                <h2 className="title">Login</h2>
                <form id="loginForm">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Email" onInputCapture={handleChangeLogin} />
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" onInputCapture={handleChangeLogin} />
                    <input type="button" value="Login" onClick={handleSubmitLogin}/>
                </form>
                <a className="flipbutton" id="loginButton" onClick={() =>{document.querySelector("#flipper").classList.toggle("flip");}} href="#">Create my account →</a>
                <br/>
            </div>
    );
}

export default Login;