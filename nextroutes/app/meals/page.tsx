import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>

        <h2>All  Meals </h2>

         <Link href="/meals/share">Share Meal </Link>
         <Link href="/meals/apple">Apple Meal </Link>
         <Link href="/meals/cake">Apple Meal </Link>
      
    </div>
  )
}

export default page
