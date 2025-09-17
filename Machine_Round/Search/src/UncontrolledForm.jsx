import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);

    // Optionally reset fields:
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          ref={nameRef}                        // unmanaged by React state
        />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          ref={emailRef}                       // unmanaged by React state
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
