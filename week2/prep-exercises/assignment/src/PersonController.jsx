import React, { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      // Format the data to include only necessary fields
      const formattedPerson = data.results[0]
        ? {
            first_name: data.results[0].name.first,
            last_name: data.results[0].name.last,
            email: data.results[0].email,
          }
        : null;
      setPerson(formattedPerson);
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}

export default PersonController;



// import React, { useState, useEffect } from 'react';
// import Person from './Person'; // Ensure that the Person component can handle individual person data

// function PersonController() {
//   const [people, setPeople] = useState([]);

//   const getPeople = async () => {
//     try {
//       const response = await fetch('https://www.randomuser.me/api?results=12');
//       const data = await response.json();
// console.log(data)
//       // Map over the results array to format each person's data
//       const formattedPeople = data.results.map(person => ({
//         first_name: person.name.first,
//         last_name: person.name.last,
//         email: person.email,
//       }));

//       setPeople(formattedPeople); // Update the state with the array of people
//     } catch (error) {
//       console.error('Error fetching people data:', error);
//     }
//   };

//   useEffect(() => {
//    // Fetch data when the component mounts
//   }, []);

//   return (
//     <>
//       <button onClick={getPeople}>Fetch People</button>
//       <div>
//         {people.length > 0 ? (
//           people.map((person, index) => (
//             <Person key={index} person={person} />
//           ))
//         ) : (
//           <p>No people to display.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default PersonController;

