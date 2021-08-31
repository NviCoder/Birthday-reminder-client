import React, { useState }  from 'react';

const List = (props) => {
  let counter = 0;
  return (
    <>
      {
        props.people.map( (person) => {
        const {dateOfBirth, fullName, img, __v, _id} = person;
        const age = calcAgeByDate(dateOfBirth);
        let today = new Date().toJSON().substring(5,10);

        if(dateOfBirth.includes(today)){
          
           props.setNumberPepole(++counter);
          return (  
            <article key={_id} className='person'>
              <img src={img} alt={fullName} />
              <div>
                <h4>{fullName}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
          
        }
        ;
        
      })}
    </>
  );

};

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

export default List;
