import React, { useState}  from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";
import UpdateFriendL from './UpdateFriendL';


const UpdateFriend =(props) => {
    
    
    const {fullName, dateOfBirth, img, _id } = props.updateFriend[0];
    const[isEdit, setIsEdit]= useState(true);
    const {handleChange,updateFriend} = UpdateFriendL(props); //Custom hook for component logic

    

    const unlockEdit = (e) =>{
        if(e.target.value == "Update"){
            updateFriend();
        }
        else{
            setIsEdit(!isEdit);
        }
    }


    return (
        <div>
            <section className='container'>
                <div className="header-friends">
                    <h2>Update your Friend</h2>
                    <p className="small-btn" onClick={props.onClose}>X</p>
                </div>
                <br/>
                <form>
                    <label>Full Name</label>
                    <input defaultValue={fullName} style={{cursor: isEdit ? 'no-drop': ''}} onChange={handleChange} type="text" name="fullName"  disabled={isEdit}/>
                    
                    
                    <label>Date Of Birth</label>
                    <input defaultValue={dateOfBirth.substr(0,10)} style={{cursor: isEdit ? 'no-drop': ''}} onChange={handleChange} type="date" name="dateOfBirth" disabled={isEdit} />
                
                    <label>Image</label>    
                    <input defaultValue={img} style={{cursor: isEdit ? 'no-drop': ''}} onChange={handleChange} type="text" name="img" disabled={isEdit} />

                    <input type="button" value={isEdit ? 'Edit': 'Update'} onClick={(e) => unlockEdit(e)} /> 
                </form>
            </section>
        </div>
    );
}

export default UpdateFriend;