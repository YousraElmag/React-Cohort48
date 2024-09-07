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
