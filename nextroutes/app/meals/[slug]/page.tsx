import React from 'react'

const page = async ({params}:{params:{slug:string}}) => {
    const { slug } = await params
  return (
    <div>
         const 

         <h2> This is Your Meal details </h2>

         <h2> Food : {slug}</h2> 
      
    </div>
  )
}

export default page
