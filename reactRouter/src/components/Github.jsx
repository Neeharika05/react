import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//     const [data,setData] = useState([])

//     useEffect(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(respose => respose.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })
//     },[])
const data = useLoaderData()

  return (
    <div>
      Github followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
const respose = await fetch('https://api.github.com/users/hiteshchoudhary')
return respose.json()
}
