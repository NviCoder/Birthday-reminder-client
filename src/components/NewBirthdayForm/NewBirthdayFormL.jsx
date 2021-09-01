import {useState} from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";

const initialFormData = Object.freeze({
    fullName: "",
    dateOfBirth: "",
    img:""
  
  });
  
  const initialFormDataErorrs = Object.freeze({
    Error: "Enter Values",
  
  });


const NewBirthdayL = (props) => {
    console.log("New Birthday Logic",props);
    
    const [formData, updateFormData] = useState(initialFormData);
    const[loading,setLoading] = useState(false);
    const[errors,setErrors] = useState(initialFormDataErorrs);
    const alert = useAlert();
        
    //---------------------------------------------------------

    const handleChange = (e) => { 
        updateFormData({
          ...formData,[e.target.name]: e.target.value.trim()
        });
      };
    
    //---------------------------------------------------------

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        //Validation
        let isValid = handleValidation();
        let errMes ="";
        if(!isValid){
            for (const property in errors) {
            errMes = `${property}: ${errors[property]}`;
            alert.error(errMes);
            }
            console.log(errMes);
            return;
        }
        //Check if this friend already exsist
        console.log(formData);
        const isExsist = checkifExsist();
        if(isExsist){
            alert.error("This friend already exsist");
            return;
        }
        setLoading(true);
        const response = await axios.post('http://localhost:3001/birthday', formData,{withCredentials: true});
        setLoading(false);
        console.log(response);
        if(response.status != 200){
            alert.error("You just broke something!");
            return;
        }
        props.addFriend(preFriends => [...preFriends,formData]);
        alert.success("Friend Added!");
        document.getElementById("formId").reset();
        props.onClose();
            
        // let newPersons = [...props.persons,
        //   formData];
        // props.addPerson(newPersons);
        // ... submit to API or something
    };

    //---------------------------------------------------------

    const handleValidation =() => {
        let errors = {};
        let formIsValid = true;
        
        //Name
        if(!formData["fullName"]){
            formIsValid = false;
            errors["full Name"] = "Cannot be empty";
        }
        
        if(typeof formData["fullName"] !== "undefined"){
            if(!formData["fullName"].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors["full Name"] = "Only letters";
            }        
        }

        //Date
        if(!formData["dateOfBirth"]){
            formIsValid = false;
            errors["date Of Birth"] = "Cannot be empty";
        }
        
        setErrors(errors);
        return formIsValid;
    };

    const checkifExsist =() =>{
        let exsist = false;
        props.friends.forEach(friend =>{
            if(friend["fullName"] == formData["fullName"]){
                exsist = true;
            }
        });
        return exsist;
    }
    
    return {formData, loading, errors, alert, handleChange, handleSubmit, handleValidation};
       
}

export default NewBirthdayL;