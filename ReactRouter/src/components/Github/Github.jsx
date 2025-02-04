import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vivekv88')
    //     .then(response => response.json())
    //     .then(data2 => {
    //         console.log(data2);
    //         setData(data2)
    //     })
    // }, [])
    

  return (
    <div className='text-5xl my-10 text-white text-center m-auto bg-gray-600 w-[70vw] h-full'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Github Picture" /> 

      
    </div>
  )
}

export default Github

export const  getInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return  response.json()
}

