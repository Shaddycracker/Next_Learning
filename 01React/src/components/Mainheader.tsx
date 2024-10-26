import React from 'react'
import Style from './mainheader.module.css';
import { MdPostAdd ,MdMessage } from 'react-icons/md';

interface Mainheadingtype{
   onCreatePost:React.Dispatch<React.SetStateAction<boolean>>
}
const Mainheader:React.FC<Mainheadingtype> = ({onCreatePost}) => {
  return (

    <header className={Style.header} >
        

         <h1 className={Style.logo} onClick={()=>onCreatePost(true)}>

            <MdPostAdd size={30}/>
             Create Post 

         </h1>
         <p>
            <button className={Style.button}>
                <MdMessage size={18}/>
                New Post
            </button>
         </p>
      
    </header>
  )
}

export default Mainheader
