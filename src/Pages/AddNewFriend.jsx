import React, { useState, useEffect  }  from 'react';
import NewBirthdayForm from '../components/NewBirthdayForm/NewBirthdayForm';
import NavBar from '../components/NavBar';
import {withRouter} from 'react-router-dom';


const AddNewFriend = () => {
  
  return (
      <>
      <NavBar/>
        <main>
        <section className='container'>
          <h2>Enter new friend</h2>
          <br/>
          <NewBirthdayForm></NewBirthdayForm>
        </section>
        </main>
      </>

  );
  

};


export default withRouter(AddNewFriend);