import React, { useState }  from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
   

const CCalendar = () => {
  
    return (
      
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Eli birthday', date: '2021-08-29' },
          { title: 'Doron birthday', date: '2021-08-31' }
        ]}
      />
      );
  };

  export default CCalendar;