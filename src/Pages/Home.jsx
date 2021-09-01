import React, { useState, useEffect}  from 'react';
import List from '../components/List';
import axios from 'axios';
import CCalendar from '../components/CCalendar'
import NavBar from '../components/NavBar';
import {withRouter} from 'react-router-dom';
import useAxios from '../Helper/useAxios';
import UpComingBirthday from '../components/UpComingBirthday';
const Home = () => {

  const [pepole, setPepole] = useState([]);
  let pepoleArr = [];
  const [loading,setLoading] = useState(true);
  const [numOfBirthday,setNumOfBirthday] = useState(0);

  useEffect(() => {
    
    const fechData = async() => {
      try {
        const response = await axios.get('http://localhost:3001/birthday',{ withCredentials: true });
        setPepole(response.data);
        setLoading(false);
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
      <div style={{display:'block'}}>
      <section className='container'>
        {loading ? <p>loading...</p> : 
        <><h3 style={{textAlign:'center'}}>{numOfBirthday} birthdays today 🔔</h3><hr/>
        <List pepole={pepole} setNumberPepole={(bd)=> setNumOfBirthday(bd)} />
        </>}
      </section>
      <section className='container'>
        <h3 style={{textAlign:'center'}}>Closest birthday 🔜</h3>
        <hr/>
        {loading ? <p>loading...</p> : 
        <UpComingBirthday pepole={pepole}/>
        }
      </section>
      </div>
      <section className='container2'>
          <h2 className='calendar-headline'>Friends birthday's calendar 🎁</h2>
          <hr/>
        {loading ? <p>loading...</p> : <CCalendar pepole={pepole}></CCalendar>}
      </section>
    </main>
  </> 
  );
};

export default withRouter(Home);