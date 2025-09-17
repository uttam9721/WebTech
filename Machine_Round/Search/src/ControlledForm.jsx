import React, { useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);

    // Optionally reset fields:
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}                         // controlled by React state
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}                        // controlled by React state
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
