import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";
import { Redirect, useHistory } from "react-router-dom";
import useAxios from '../../Helper/useAxios';

const initialFormDataReg = Object.freeze({
    name: "",
    email: "",
    pass:""
  });

const initialFormDataErorrs = Object.freeze({
Error: "Enter Values",
});


const RegisterL = (props) => {
    
    const [formDataReg, updateFormDataReg] = useState(initialFormDataReg);
    const[loading,setLoading] = useState(false);
    const[errors,setErrors] = useState(initialFormDataErorrs);
    const alert = useAlert();
    const history = useHistory();

//========================================================================================
    /**
     * 
     * @param {*} e 
     */
    const handleChangeReg = (e) => { 
        updateFormDataReg({
          ...formDataReg,[e.target.name]: e.target.value.trim()
        });
      };

//========================================================================================
    /**
     * 
     * @param {*} e 
     * @returns 
     */
    const handleSubmitRegister = async(e) => {
        e.preventDefault()
        console.log(formDataReg);
        // let isValid = handleValidation();
        // let errMes ="";
        // if(!isValid){
        //   for (const property in errors) {
        //     errMes = `${property}: ${errors[property]}`;
        //     alert.error(errMes);
        //   }
        //   console.log(errMes);
        //   return;
        // }
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

    return {handleChangeReg, handleSubmitRegister};
}

export default RegisterL;