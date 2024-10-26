import React ,{useState} from 'react'
import style from './PostInput.module.css';

interface PostInputtype{
   onClose: React.Dispatch<React.SetStateAction<boolean>>
   setAllPost: React.Dispatch<React.SetStateAction<{author: string; body: string;}[]>>
   
}

const PostInput:React.FC<PostInputtype> = ({onClose,setAllPost}) => {
    const [body, setBody] = useState('');
    const [author,setAuthor]= useState('');
    const handleFormSubmit =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAllPost((prev)=>[...prev,{author:author,body:body}]);
        onClose(false);


    }
  return (
    <form className={style.main} onSubmit={handleFormSubmit}>

        <input type="text" placeholder='Enter Text' value={body} className={style.input} onChange={(e)=>{setBody(e.target.value)}} />
        <input type="text" placeholder='Enter Name' value={author} className={style.input} onChange={(e)=>{setAuthor(e.target.value)}} />

        <section className={style.buttonSection}> 

        <button type='button' className={style.action} onClick={()=>onClose(false)}> Close </button>
        <button className={style.action}> Create </button>
        </section>
    </form>
  )
}

export default PostInput
