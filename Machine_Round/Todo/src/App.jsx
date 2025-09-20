// // import React, { useState } from 'react'

// // const App = () => {
// //     const [input,setInput]=useState('');
// //     const [data,setData]=useState([]);
// // console.log(input);

// //     const handler=(e)=>{
// //         e?.preventDefault();
// //         if(!input.trim()) return;
// //         setData([...data,input])
// //         setInput("");
// //     }
// //   return (
// //     <>
// //      <form onSubmit={handler}>
// //         <input type="text"
// //         value={input}
// //         placeholder='search here...'
// //         onChange={(e)=>setInput(e.target.value)}
// //          name="" id="" />
// //          <button>Add</button>
// //         </form> 
// //         {data.map((item,idx)=>{
// //             return(
// //                 <div key={idx}>
// //                     {item}
// //                     <button onClick={()=>setData(data.filter((_,i)=>i!==idx))}>delete</button>
// //                 </div>
// //             )
// //         })}
// //     </>
// //   )
// // }

// // export default App



import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("");
  
  let arr = [
    "C", "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  const handler = (e) => {
    e?.preventDefault(); // fixed typo
  };

  const clickBtn = (e) => {
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      try {
        let ans = eval(value); // calculate
        setValue(ans.toString());
      } catch (err) {
        setValue("Error");
      }
    } else {
      setValue((val) => val + id);
    }
  };

  return (
    <>
      <form onSubmit={handler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search here.."
        />
        <div onClick={clickBtn}>
          {arr.map((item, idx) => {
            return (
              <button id={item} key={idx}>
                {item}
              </button>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default App;
