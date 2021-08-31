import React , { useState }  from 'react';
import Login from './Login';
import Register from './Register';

const LoginOrRegister = (props) => {

    //const[loginOrRegister, setloginOrRegister] = useState(false); 

    return (
        <div>
            <div className="flip-container">
                <div className="flipper" id="flipper">
                   <Login props={props}/>
                   <Register/>
                </div>
            </div>
        </div>
    );
}

export default LoginOrRegister;