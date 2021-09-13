import React, { useState}  from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";
import { birthdaySchema } from '../../Validations/BirthdayValidation';


const UpdateFriendL =(props) => {

    
    const alert = useAlert();
    const {fullName, dateOfBirth, img, _id } = props.updateFriend[0];
    const [formData, updateFormData] = useState({
        "fullName": fullName,
        "dateOfBirth": dateOfBirth,
        "img": img
    });
    
    
    //---------------------------------------------------------

    const handleChange = (e) => { 
        updateFormData({
          ...formData,[e.target.name]: e.target.value.trim()
        });
        console.log(formData);
    };

  const updateFriend = async() => {
    
    const isValid = await validForm();
        
    if(!isValid){
        return;
    }
    
    props.friends.forEach(person => {
        if (person._id == _id ){
            person.fullName = formData.fullName;
            person.dateOfBirth = formData.dateOfBirth;
            person.img = formData.img;
        }
    });
    props.updateFriendsList(props.friends);
    try{
        const response = await axios.put(`http://localhost:3001/birthday/${props.updateFriend[0]._id}`,formData, {withCredentials: true});
        console.log(response);
        if(response.status != 200){
            alert.error("You just broke something!");
            return;
        }

      }
      catch (error) {
          console.log(error);
          return;
      }
        
      alert.success("Friend Updated!");

      props.onClose();
    
  }

  const validForm = async() =>{
    let errors="";
    const isValid = await birthdaySchema.validate(formData).catch( (err) => {
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

  return {handleChange,updateFriend};


}

export default UpdateFriendL;