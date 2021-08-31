import React , { useState }  from 'react';
import NewBirthdayL from './NewBirthdayFormL';



const NewBirthdayForm = () => {
  
  const { loading, handleChange, handleSubmit} = NewBirthdayL();

  return (
        <>
        <form id="formId">
          
            <label>Full Name</label>
            <input type="text" name="fullName" onChange={handleChange}  />
          
          
            <label>Date Of Birth</label>
            <input type="date" name="dateOfBirth" onChange={handleChange} />
         
            <label>Image</label>    
            <input type="text" name="img" onChange={handleChange} />

            {loading ? <p>loading...</p> : <input type="button" value="Add 🎈" onClick={handleSubmit} disabled={loading} /> }
        </form>
        </>
  );
};



export default NewBirthdayForm;
