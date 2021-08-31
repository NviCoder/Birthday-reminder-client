import React, { useState, useEffect}  from 'react';
import List from '../components/List';
import axios from 'axios';
import CCalendar from '../components/CCalendar'
import NavBar from '../components/NavBar';
import {withRouter} from 'react-router-dom';
import useAxios from '../Helper/useAxios';

const Home = () => {

  const [people, setPeople] = useState([]);
  const [loading,setLoading] = useState(true);
  const [numOfBirthday,setNumOfBirthday] = useState(0);

  useEffect(() => {
    
    const fechData = async() => {
      try {
        const response = await axios.get('http://localhost:3001/birthday',{ withCredentials: true });
        setLoading(false);
        setPeople(response.data);
        console.log(response);
       
      } catch (error) {
        console.log(error);
        return;
      }
    }

    fechData();
    
  }, []);

  return (
    <>
    <NavBar/>
    <main>
      <section className='container'>
        {loading ? <p>loading...</p> : 
        <><h3 style={{textAlign:'center'}}>{numOfBirthday} birthdays today</h3><hr/>
        <List people={people} setNumberPepole={setNumOfBirthday} />
        </>}
      </section>
      <section className='container2'>
          <h2 className='calendar-headline'>Friends birthday's calendar 🎁</h2>
          <hr/>
        <CCalendar></CCalendar>
      </section>
    </main>
    </> 
  );
};

export default withRouter(Home);