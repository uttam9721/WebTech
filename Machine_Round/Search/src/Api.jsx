// import React, { useEffect, useState } from 'react';

// const Api = () => {
//   const [data, setData] = useState([]); // array to map over
//   const [loading, setLoading] = useState(true);

//   function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);          // save data to state
//         setLoading(false);        // stop loading
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <>
//       <h1>Users List</h1>
//       <div>
//         {data.map((item, idx) => (
//           <div key={idx}>
//             <p>{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Api;


import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data,setData]=useState([]);
    // function fetchData(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((result)=>setData(result)).catch(err=>console.log(err)
    //     )
    // }
    async function fetchData(){
        const getData= await fetch('https://jsonplaceholder.typicode.com/users')
        const  result =await getData.json();
        setData(result);
    }
    useEffect(()=>{
        fetchData();

    },[])
  return (
    <div>
      {data.map((item,idx)=>{
        return(
            <div key={idx}>
                {item.name}
            </div>
        )
      })}
    </div>
  )
}

export default Api
