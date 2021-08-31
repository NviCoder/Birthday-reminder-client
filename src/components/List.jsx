import React  from 'react';

const List = ({ people }) => {

  return (
    <>
      {people.map( (person) => {
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
