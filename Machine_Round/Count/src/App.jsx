
// // // import React,{useState} from 'react'

// // // const App = () => {
// // //     const [count,setCount]=useState(0);

// // //   return (
// // //     <div >
// // //       <h1>Count:{count}</h1>
// // //       <button onClick={()=>setCount(count+1)}>Increase</button>
// // //       <button onClick={()=>setCount(count-1)}>Decrease</button>
      
// // //     </div>
// // //   )
// // // }

// // // export default App



// // // import React, { useState } from 'react'

// // // const App = () => {
// // //     const [count,setCount]=useState(0);
// // //     const Increase=()=>{
// // //         setCount(count+1);
// // //     }
// // //     const Decrease=()=>{
// // //         setCount(count-1);
// // //     }

// // //   return (
// // //     <div>
// // //         <h1>count:{count}</h1>
// // //       <button onClick={Increase}>Increase</button>
// // //       <button onClick={Decrease}>Decrease</button>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React, { useState } from 'react'

// // const App = () => {
// //     const [count,setCount]=useState(0)
// //   return (
// //     <div>
// //         <h1>{count}</h1>
// //       <button onClick={()=>setCount(count+1)}>Inc</button>
// //       <button onClick={()=>setCount(count-1)}>Dec</button>
// //       <button onClick={()=>setCount(0)}>Reset</button>
// //     </div>
// //   )
// // }

// // export default App



// import React,{useEffect,useState} from 'react';
// import axios from 'axios';
// const Users = () => {
//  const [data, setData] = useState([]);
//  useEffect(() => {
//  axios.get('https://jsonplaceholder.typicode.com/users')
//  .then(res => setData(res.data))
//  .catch(err => console.log(err));
//  }, []);
//  return (
//  <div>
//  <h1>Users</h1>
//  <ul>
//  {data.map(user => <li key={user.id}>{user.name} -
// {user.email}</li>)}
//  </ul>
//  </div>
//  );
// }
// export default Users;


import React, { useState } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime=()=>{
           time = new Date().toLocaleTimeString();
           setCtime(time)

  }
  setInterval(UpdateTime,1000)

  return (
    <>
      <h1>{ctime}</h1>
 
      {/* <Count /> */}
      
      
    </>
  )
}

export default App;
