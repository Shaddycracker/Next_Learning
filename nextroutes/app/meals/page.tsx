import React from 'react'
import {getMeals} from '@/lib/meals';
import { Suspense } from 'react';
import Loading from './loading-out';
async function MealsDataDynamic(){

  const data=await getMeals();
   
  return ( <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>

  {

    data.map((item:any)=> <Card data={item} key={item.id}/>)

  }
</div>
  )
}

import Card from '@/components/OneMealCard/Card';
const page = () => {

  

    

  return (
    <div className='text-black font-bold sm:p-10 p-3 flex flex-col'>

        <h2 className='text-2xl'>All  Meals </h2>
          
         <Suspense fallback={<Loading/>}>
         <MealsDataDynamic/>
         </Suspense>

      
    </div>
  )
}

export default page
