// import React, { useRef } from "react";

// function RegisterForm() {

//   const nameRef = useRef();
//   const emailRef = useRef();
//   const phoneRef = useRef();
//   const passwordRef = useRef();
//   const imageRef = useRef();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const phone = phoneRef.current.value;
//     const password = passwordRef.current.value;
//     const image = imageRef.current.files[0]; // File input

//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Phone:", phone);
//     console.log("Password:", password);
//     console.log("Image:", image);

//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <div>
//         <label>Name:</label>
//         <input type="text" ref={nameRef} placeholder="Enter your name" />
//       </div>

//       <div>
//         <label>Email:</label>
//         <input type="email" ref={emailRef} placeholder="Enter your email" />
//       </div>

//       <div>
//         <label>Phone:</label>
//         <input type="tel" ref={phoneRef} placeholder="Enter your phone" />
//       </div>

//       <div>
//         <label>Password:</label>
//         <input type="password" ref={passwordRef} placeholder="Enter password" />
//       </div>

//       <div>
//         <label>Profile Image:</label>
//         <input type="file" ref={imageRef} />
//       </div>

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegisterForm;



// // import React, { useReducer } from 'react'

// // function login(state, action) {
// //   switch (action.type) {
// //     case "inc":
// //       return { count: state.count + 1 }
// //     case "dec":
// //       return { count: state.count - 1 }
// //     default:
// //       return state
// //   }
// // }

// // const App = () => {
// //   const [state, dispatch] = useReducer(login, { count: 0 });

// //   return (
// //     <div>
// //       <h1>App login</h1>
// //       <h1>{state.count}</h1>
// //       <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
// //       <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
// //     </div>
// //   )
// // }

// // export default App


import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState('');
  const [search,setSearch]=useState('');
  const [store,setStore]=useState([]);
  console.log(name);
  
const searchFilter = store.filter((ele) => ele.toLowerCase().includes(search.toLowerCase()));

  const handler=(e)=>{
    e.preventDefault();
    if(!name.trim()) return;
    setStore([...store,name])
    setName('')
  }
  return (
    <>
      <form onSubmit={handler}>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text" placeholder='Add the task here..' name="" id="" />
        <button>Add</button> <br />
        <input type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        name="" id="" />
      </form>
      {
        searchFilter.map((item,idx)=>{
          return(
            <div key={idx}>
             <p>{item}</p> 
             <button onClick={()=>setStore(store.filter((_,i)=>i!==idx))}>Delete</button>

            </div>
          )
        })
      }
    </>
  )
}
export default App



