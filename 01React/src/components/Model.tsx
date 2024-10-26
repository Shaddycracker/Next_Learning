import React from 'react'
import Style from './model.module.css'
interface MyComponentProps {
    children: React.ReactNode;
    onClose:React.Dispatch<React.SetStateAction<boolean>>
  }
const Model:React.FC<MyComponentProps> = ({children,onClose}) => {
  return (
    <div className={Style.backdrop} onClick={()=>{onClose(false)}}>

        <dialog open className={Style.modal} onClick={(event) => event.stopPropagation()}>

        {children}

        </dialog>
      
    </div>
  )
}

export default Model
