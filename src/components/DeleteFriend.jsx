import React from 'react';
import axios from 'axios';
import { useAlert } from "react-alert";


const DeleteFriend =(props) => {
  
  const alert = useAlert();

  const removeFriend = async() => {
    console.log(props.delFriend);
    
    try{
        const response = await axios.delete(`http://localhost:3001/birthday/${props.delFriend}`, {withCredentials: true});
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
        
      let birthdayFilterd = props.friends.filter(friend => friend["_id"] != props.delFriend);
      props.removeFriend(birthdayFilterd);
      alert.success("Friend removed!");
      props.onClose();
    
  }


  return (
        <>
        <section className='container'>
          <h4 style={{textAlign:'center'}}>Are you Sure you want to delete?</h4>
          <hr/>
          <br/>
          <div style={{display:'flex'}}>
            <button style={{marginLeft:"auto", background:'var(--clr-green-light)'}} onClick={()=> removeFriend()}>Yes</button>
            <button style={{marginRight:"auto",background:'var(--clr-red-dark)'}} onClick={props.onClose}>No</button>
          </div>
        </section>
        </>
    );


    
}

export default DeleteFriend;