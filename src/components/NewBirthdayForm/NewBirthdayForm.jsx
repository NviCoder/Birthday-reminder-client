import React , { useState }  from 'react';
import NewBirthdayL from './NewBirthdayFormL';



const NewBirthdayForm = (props) => {
  
  const { loading, handleChange, handleSubmit} = NewBirthdayL(props);//Custom hook for component logic

  console.log(props);
  return (
        <>
        <section className='container'>
          <div className="header-friends">
            <h2>Enter new friend</h2>
            <p className="small-btn" onClick={props.onClose}>X</p>
          </div>
          <br/>
          <form id="formId">
            
              <label>Full Name</label>
              <input type="text" name="fullName" onChange={handleChange}  />
            
            
              <label>Date Of Birth</label>
              <input type="date" name="dateOfBirth" onChange={handleChange} />
          
              <label>Image</label>    
              <input type="text" name="img" onChange={handleChange} />

              {loading ? <p>loading...</p> : <input type="button" value="Add 🎈" onClick={handleSubmit} disabled={loading} /> }
          </form>
        </section>
        </>
  );
};



export default NewBirthdayForm;
