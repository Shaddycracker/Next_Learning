
interface Posttype{
    body:string,
    author:string
}
import Style from './post.module.css'

const Post = ({author,body}:Posttype) => {
  return (
    <div className={Style.main}>
        

        <h2 style={{fontSize:"14px",fontWeight:'normal'}}>

            {author}

        </h2>
        <h2 style={{fontSize:"24px",fontWeight:'lighter'}}>

            {body}

        </h2>
      
    </div>
  )
}

export default Post
