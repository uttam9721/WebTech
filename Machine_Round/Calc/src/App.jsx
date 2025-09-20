

import React, { useState } from 'react'

const App = () => {
    const [value,setValue]=useState('');
    let arr = [
    "C", "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];
console.log(value);

  const handlerSubmit=(e)=>{
    e.preventDefault();
  }

  const clickHandler=(e)=>{
    const id =e.target.id;
    if(id==='C'){
      setValue('');
    }else if(id==='=') {
      let ans = eval(value);
      setValue(ans.toString())
    }else{
       setValue((val) => val + id);
    }
  }
  return (
    <>
     <form onSubmit={handlerSubmit}>
        <input type="text" 
        placeholder='add items list'
        value={value}
            onChange={(e)=>setValue(e.target.value)}
        name="" id="" />
        </form> 
        <div className='btn'>
            {arr.map((item,idx)=>{
                return(
                    <button onClick={clickHandler} id={item} key={idx}>
                        {item}
                    </button>
                )
            })}
        </div>
    </>
  )
}

export default App
