"use client"
import React, { useState } from 'react'
import BurgerImage from '@/assets/burger.jpeg';
import PizzaImage from '@/assets/pizza.jpeg';
import ChowmeinImage from '@/assets/chowmien.jpeg';
import PotatoImage from '@/assets/potato.jpeg';
import NonvegImage from '@/assets/non-veg.jpeg';
import { useEffect } from 'react';
import Image from 'next/image';




const ImageSlider = () => {
    const ImagesData=[BurgerImage,PizzaImage,ChowmeinImage,PotatoImage,NonvegImage];
    const [currentIndex,setCurrentIndex]=useState<number>(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            

            setCurrentIndex(currentIndex<ImagesData.length-1?currentIndex+1:0);

        },5000);

        return ()=>clearInterval(timer);
    })

  return (
    <section className='relative flex-1 flex  justify-items-center items-center '>
    <Image 
      src={ImagesData[currentIndex].src}
      alt='image'
      width={500}
      height={500}
      className='rounded-2xl absolute'
      
    >


      
    </Image>
    </section>
  )
}

export default ImageSlider
