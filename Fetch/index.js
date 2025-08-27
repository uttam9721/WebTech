const button = document.getElementById("search-btn");
const input =document.getElementById("city-input");

   async function getData(key){
     const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=3aeb6ba2abae4483b02140055252708&q=${key}&aqi=yes`)
     return await promise.json();
    }

    button.addEventListener("click",async()=>{
        // const value = input.value;
        const result =await getData(input.value);
        console.log(result);
        
    })



// 1a65e8f1d1294f8a81b11427251707

// http://api.weatherapi.com/v1/current.json?key=3aeb6ba2abae4483b02140055252708&q=London&aqi=yes