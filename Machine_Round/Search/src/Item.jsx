import React, { useState } from 'react'
import { Products } from './Products'
const Item = () => {
    const [search,setSearch]=useState('');

    const filterData = Products.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
    )
    // const filterData = Products.filter((e)=>e.price>100)
  return (
    <>
      <h1>Products</h1>
      <input type="text"
      placeholder='search here...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
       name=""
        id="" />
        {
            filterData.map((item,idx)=>{
               return(
                 <div key={idx}>
                    {item.name}
                    {/* {item.price} */}

                </div>
               )
            })
        }
    </>
  )
}

export default Item
