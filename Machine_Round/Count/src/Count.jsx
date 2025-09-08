// import React from 'react'

// const Count = (props) => {
//   return (
//     <div>
//       {`welcome to ${props.name}`}
//     </div>
//   )
// }

// export default Count


import React from 'react'
import { useState } from 'react'

const Count = () => {
  const [input ,setInput]=useState("");
  const [data,setData]=useState([]);
  console.log(input);

  const handlerChange=(e)=>{
    e.preventDefault()
    if(!input.trim()) return;
    setData([...data,input])
    setInput("")
  }

  
  return (
    <>
      <form onSubmit={handlerChange}>
        <input type="text" 
        placeholder='search here..'
        value={input}
        onChange={(e)=>setInput(e.target.value)}

        name="" id="" />
        <button>Add</button>
      </form>
      {data.map((item,idx)=>{
        return(
          <div key={idx}>
            <i>{item}</i>
            <button onClick={()=>setData(data.filter((_,e)=>e!==idx))}>delete</button>
          </div>
        )
      })}
    </>
  )
}

export default Count
