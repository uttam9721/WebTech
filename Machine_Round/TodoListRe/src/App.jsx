
// import React, { useState } from 'react'

// const App = () => {
//     const [value,setValue]=useState('');
//     const [store,setStore]=useState([]);
//     console.log(value);

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(!value.trim()) return;
//     setValue('')
//     setStore([...store,value]);
// }

    
//   return (
//     <>
//       <h1>Todo</h1>
//      <form onSubmit={handleSubmit}>
//          <input type="text"
//       placeholder='Add List here...'
//       value={value}
//       onChange={(e)=>setValue(e.target.value)}      
//       name="" id="" />
//       <button>Add</button>
//      </form>
//      {store.map((item,idx)=>{
//         return(
//             <div key={idx}>
//                 {item}
//                 <button onClick={()=>setStore(store.filter((_,e)=>e!==idx))}>delete</button>
//             </div>
//         )
//      })}
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
    const [input,setInput]=useState('');
    const [store,setStore]=useState([]);
    console.log(input);

    const handlerSumit=(e)=>{
        e.preventDefault();
        setInput('');
        if(!input.trim()) return;
        setStore([...store,input])
    }
    
  return (
    <>
     <form onSubmit={handlerSumit}>
        <input type="text"
        placeholder='add here.'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        name="" id="" />
        <button>add</button>
        </form> 
        {store.map((item,idx)=>{
            return(
                <div key={idx}>
                    {item} -  <button onClick={()=>setStore(store.filter((_,i)=>i!==idx))}>delete</button>
                </div>
            )
        })}
    </>
  )
}

export default App
