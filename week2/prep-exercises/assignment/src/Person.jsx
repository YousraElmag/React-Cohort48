import React from 'react';

function Person({ person }) {
  if (!person) return <p>Loading...</p>;

  const { first_name, last_name, email } = person;

  return (
    <ul>
      <li>First Name: {first_name}</li>
      <li>Last Name: {last_name}</li>
      <li>Email: {email}</li>
    </ul>
  );
}

export default Person;