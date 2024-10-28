import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface CardPropType{
    data:{
        id:number,
        title:string,
        slug:string,
        image:string,
        summary:string,
        instruction:string
    }
}
const Card:React.FC<CardPropType> = ({data}) => {
  return (
   

<div className="max-w-sm border rounded-lg shadow bg-yellow-900 ">

       <div className='relative w-full h-48'>
   
        <Image className="rounded-t-lg w-full h-auto object-cover absolute" src={data.image} fill alt="Not Found " />
        </div>
    
    <div className="p-5">
        <section>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.title}</h5>
        </section>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.summary}</p>
        <Link href={`/meals/${data.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
       </Link>
    </div>
</div>

  )
}

export default Card
