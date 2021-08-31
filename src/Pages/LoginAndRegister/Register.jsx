import React , { useState }  from 'react';
import RegisterL from '../LoginAndRegister/RegisterL';

  
function Register(props) {

    const { handleChangeReg, handleSubmitRegister} = RegisterL(props); 
    
    return (
            <div className="back">
                <h2 className="title">Register</h2>
                <form id="regForm"> 
                    <label>Full Name:</label>
                    <input type="text" name="name" onInputCapture={handleChangeReg} placeholder="Person Person" />
                    <label>Email:</label>
                    <input type="text" name="email" onInputCapture={handleChangeReg} placeholder="exm@exe.com" />
                    <label>Password</label>
                    <input type="password" name="pass" onInputCapture={handleChangeReg}  placeholder="Password" />
                    <input type="button" value="Sign up" onClick={handleSubmitRegister}/>
                </form>
                <a className="flipbutton" id="registerButton" onClick={() =>{document.querySelector("#flipper").classList.toggle("flip");}} href="#">Login to my account →</a>
            </div>
    );
}

export default Register;