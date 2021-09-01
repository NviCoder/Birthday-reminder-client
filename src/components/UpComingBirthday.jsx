import React, { useState, useEffect}  from 'react';

const UpComingBirthday =(props) => {
    
    const upcomingBithday = null;
    const upComingPlusDays = findUpCommingBithday(props.pepole);
    const upComingBirthdays =  upComingPlusDays[0]["birthdays"];
    const daysToUpcoming = upComingPlusDays[1]["days"];
    console.log("The birthday is: ",upComingPlusDays);
    console.log("upComingBirthdays: ",upComingBirthdays)
    console.log("daysToUpcoming: ",daysToUpcoming)
    
    return (
        <>
        {
        upComingBirthdays.map( (person) => {
        const {dateOfBirth, fullName, img, __v, _id} = person;
        const age = calcAgeByDate(dateOfBirth);  
          return (  
            <article key={_id} className='person'>
              <img src={img} alt={fullName} />
              <div>
                <h4>{fullName}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );    
        })}
        <h4 style={{color: daysToUpcoming < 5 ? 'red': ''}}>In {daysToUpcoming} days!</h4>
        </>
    ); 

    
}

const findUpCommingBithday =(bithdays) =>{
    let theUpCommingBithdays = [];
    let days = 999;
    bithdays.forEach(person => {
        let getYearlyDateS =  "2021-"+person["dateOfBirth"].substring(5,7)+"-"+person["dateOfBirth"].substring(8,10);
        let personDateOfBirthThisYear = new Date(getYearlyDateS);
        let today = new Date();
        const diffTime = (personDateOfBirthThisYear - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
        if( diffDays > 0 && diffDays <= days){
            if(diffDays == days){
                theUpCommingBithdays.push(person);
            }
            else{
                theUpCommingBithdays = [person];

            }
            days = diffDays;
        }
    });
    return  [{"birthdays":theUpCommingBithdays},{"days":days}];   
}

/**
 * This function calculate this person years old.
 * 
 * @param {date} dateOfBirth 
 * @returns 
 */
 function calcAgeByDate(dateOfBirth){
    let personDateBirth = new Date(dateOfBirth);
    let age = parseInt( Math.abs(new Date() - personDateBirth) /  3.154e+10);
    return age;
  }

export default UpComingBirthday;