import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    const handlerSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,password);
        setName('');
        setPassword('')
        
    }

  return (
    <div>
      <h1>Form.</h1>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="">Name</label> <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Search here' name="" id="" /> <br /> <br />
        <label htmlFor="">password</label> <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Search here' name="" id="" /> <br /> <br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Form
