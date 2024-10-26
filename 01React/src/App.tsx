
import { useState } from 'react'
import Style from './App.module.css';
import Post from './components/Post'
import PostInput from './components/PostInput'
import Model from './components/Model';
import Mainheader from './components/Mainheader';
function App() {
  const [isVisible,setIsVisible]=useState(false);
  
  const [allPost,setAllPost]=useState([{author:'shadab',body:'I am a Good Example'}]);

  return (

    <main className={Style.main}>
      <Mainheader onCreatePost={setIsVisible}/>
      {isVisible &&
      <Model onClose={setIsVisible}>
      <PostInput onClose={setIsVisible}  setAllPost={setAllPost} />
      </Model>
       }
      <article className={Style.postcontainer}>

           {

             allPost.map((item,index)=> <Post key={index} author={item.author.split(' ')[0].split(',')[0]}  body={item.body} />)

           
           }

         
      
     </article>
     
    </main>
  )
}

export default App
