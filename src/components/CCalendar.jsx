import React, { useState ,useEffect}  from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
   

const CCalendar = ({pepole}) => {

  const [eventsB,setEvents] = useState([]);

  useEffect(() => { 
 
    getEventsForCalander(pepole);

  }, [pepole]);
  
  return (
    
      <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={eventsB}
    />
  );

    function getEventsForCalander(pepole){
      let newEvents =[];
      pepole.forEach(person =>{
        
        const {dateOfBirth, fullName, img, __v, _id} = person;
        let _date = "2021-"+dateOfBirth.substring(5,7)+"-"+dateOfBirth.substring(8,10);
        let _title =fullName+" 🎈";
        newEvents.push({title:_title, date:_date })
        
      });
       setEvents(preEvents => [...preEvents, ...newEvents]);
    }   

  };

  export default CCalendar;