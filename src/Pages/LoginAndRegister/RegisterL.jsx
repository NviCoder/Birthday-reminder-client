import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";
import { Redirect, useHistory } from "react-router-dom";
import useAxios from '../../Helper/useAxios';
import { userSchema } from '../../Validations/UserValidation.';

const initialFormDataReg = Object.freeze({
    name: "",
    email: "",
    pass:""
  });

const RegisterL = (props) => {
    
    const [formDataReg, updateFormDataReg] = useState(initialFormDataReg);
    const[loading,setLoading] = useState(false);
    const alert = useAlert();
    const history = useHistory();

//========================================================================================
    /**
     * update the state of the form.
     * @param {*} e The input that was changed by the user
     */
    const handleChangeReg = (e) => { 
        updateFormDataReg({
          ...formDataReg,[e.target.name]: e.target.value.trim()
        });
      };

//========================================================================================
    /**
     * handle  the register of the form
     * if the register sucssed the user will be transfer to login page.
     */
    const handleSubmitRegister = async(e) => {
        e.preventDefault()
        console.log(formDataReg);
       
        const isValid = await validForm();
        
        if(!isValid){
            return;
        }
        
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/users', formDataReg);
            setLoading(false);
            console.log(response);
           
        } catch (error) {
           let errMes = error.response.data.err;
           alert.error(errMes);
           return;
        }
        alert.success("Register sucsess - pls login.");
        document.querySelector("#flipper").classList.toggle("flip");
        document.getElementById("regForm").reset();

    }

 //========================================================================================
    /**
     * handle  the Validation of the form using yup libaray 
     * @returns true if the form valid, false if the form not valid
     */
    const validForm = async() =>{
        let errors="";
        const isValid = await userSchema.validate(formDataReg).catch( (err) => {
            console.log("err: ",err); // => 'ValidationError
            console.log("err.name: ",err.name); // => 'ValidationError'
            console.log("err.errors: ",err.errors);
            //alert.error(err.errors);// => ['Deve ser maior que 18']
            errors = err.errors;
          });;
        if(errors==""){
            return true;
        }
        else{
            alert.error(errors);
            return false;
        }
        
    }

    return {handleChangeReg, handleSubmitRegister};
}

export default RegisterL;