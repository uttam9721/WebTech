
import React, { useState } from 'react'
import { Data } from './Data'

const App = () => {
  const [store,setStore]=useState(Data);
  const [data,setData]=useState("");
  // console.log(data);
  const filterData =store.filter((currVal)=>{
    return currVal.name.toLowerCase().includes(data) || currVal.brand.toLowerCase().includes(data);
  })
  
  return (
    <div className='app-container'>
      <input type="text"
      placeholder='search here.'
      value={data}
      onChange={(e)=>setData(e.target.value)}
      name="" id="" />
      
      <div>
        {
          filterData.map((item,idx)=>{
            return(
             <>
              <div key={idx} className='ite'>
                <img src={item.img} alt="" />
                <p>{item.brand}</p>
                <p>{item.name}</p>
              </div>

             </>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
