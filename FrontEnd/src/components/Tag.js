import axios, { formToJSON } from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
export default function Tag() {
   const [gif,setgif] = useState("");
   const [loading,setloading] = useState(false);
   const [tag,settag] = useState("car");
   async function fetchdata(){
    setloading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    console.log(data)
   // const imageSource = data.data.images.downsized_large.url;
      setgif(data.data.images.downsized_large.url)
      setloading(false);
   }

   
   useEffect(() => {
    fetchdata();
}, [])
function clickHandler(){
    fetchdata();
}
function changeHandler(event){
    settag(event.target.value);
}
  return (
   
    
    <div className=' bg-green-600  w-1/2 rounded-lg mt-10 p-3 flex flex-col items-center border border-blue-700 ' >
        <h2 className='text-2xl underline font-bold mb-5'>RANDOM {tag} GIF</h2>
        {
            loading ? <Spinner></Spinner> :  <img src= {gif}  width={400} height={300}></img>
        }

         <input type='text' className='w-[80%] mt-4 rounded-lg p-3 text-center' onChange={changeHandler} value={tag} ></input>
        <button className='w-[80%] bg-yellow-300 rounded-lg p-3 mt-4 ' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}
