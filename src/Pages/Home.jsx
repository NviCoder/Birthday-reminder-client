import React, { useState, useEffect}  from 'react';
import List from '../components/List';
import axios from 'axios';
import CCalendar from '../components/CCalendar'
import NavBar from '../components/NavBar';
import {withRouter} from 'react-router-dom';
import useAxios from '../Helper/useAxios';

const Home = () => {

  const [people, setPeople] = useState([]);
  const { response, loading, error } = useAxios({
      method: 'get',
      url: '/birthday',
  });

  useEffect(() => {
    
    if(response !== null){
      setPeople(response);
    }

  }, [response]);

  return (
    <>
    <NavBar/>
    <main>
      <section className='container'>
        {loading ? <p>loading...</p> : <><h3 style={{textAlign:'center'}}>{people.length} birthdays today</h3><hr/><List people={people} /></>}
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