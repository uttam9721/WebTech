

import React, { useState } from 'react'

const App = () => {
    const [search ,setSearch]=useState();
    const [data ,setData]=useState();

    const myFun=async()=>{
      const data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      const res=await data.json();
      console.log(res);
      setData(res[0])
      
    }
  return (
    <div>
      <h1>Dictonary</h1>
      <input type="text"
      placeholder='search here...'
      value={search}
    
      onChange={(e)=>setSearch(e.target.value)}
      name="" id="" /> <br />
      <button onClick={myFun}>search</button>
      <div>
        {data?<div>
            <h2>{data.word}</h2>
            <p>{data.meanings[0].partOfSpeech}</p>
        </div>:"data not found"}
      </div>
    </div>
  )
}

export default App
