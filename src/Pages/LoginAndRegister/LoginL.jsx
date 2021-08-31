import { useState } from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";


  const initialFormDataLogin = Object.freeze({
    email: "",
    pass:""
  });

const initialFormDataErorrs = Object.freeze({
Error: "Enter Values",
});



const LoginAndRegisterL = (props) => {
    
    const [formDataLogin, updateFormDataLogin] = useState(initialFormDataLogin);
    const[loading,setLoading] = useState(false);
    const[errors,setErrors] = useState(initialFormDataErorrs);
    const alert = useAlert();
    const history = useHistory();


//========================================================================================
    /**
     * 
     * @param {*} e 
     */
    const handleChangeLogin = (e) => { 
        updateFormDataLogin({
        ...formDataLogin,[e.target.name]: e.target.value.trim()
    });
    
    };
//========================================================================================    
    /**
     * 
     * @param {*} e 
     * @returns 
     */
    const handleSubmitLogin = async(e) => {
        e.preventDefault()
        console.log(formDataLogin);

        /****Validation***/
        if(!formDataLogin["pass"] && !formDataLogin["email"] ){
            alert.error("Enter email and password please!");
            return;
        }

        if(!formDataLogin["pass"] || formDataLogin["pass"].length < 3 ){
            alert.error("Check you password again!");
            return;
         }

        if(!formDataLogin["email"] || formDataLogin["email"].length < 6 ){
            alert.error("Check you email again!");
            return;
        }
        /**** END Validation***/

        setLoading(true);
        
        try {
            const response = await axios.post('http://localhost:3001/users/login', formDataLogin,{withCredentials: true});
            setLoading(false);
            console.log(response);
           
        } catch (error) {
           console.log(error.response);
           let errMes = error.response.data.msg;
           alert.error(errMes);
           return;
        }
        props.props.changeAuthState(true);
        history.push("/home"); 
        
    }

    return {handleChangeLogin, handleSubmitLogin};
}

export default LoginAndRegisterL;