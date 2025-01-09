import { useState } from "react";

import utiles from "../../utiles/utiles";

import { CommentsType } from "../../types/types";
import data from "../../DataManagment/Data";


type AddCommentFormProps={
    close:()=>void,
    create: (arg:CommentsType)=>void,
    placeholder:string
}

const AddCommentsForm = ({create,close,placeholder}:AddCommentFormProps)=>{

    const id = utiles.makeid(4);
    let userName:string=data.Get("User name") || "defult name";
    const [comment,setComment] = useState({
        text:'',
        commentId:id,
        user:userName
    });

    const handleText = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setComment((prev)=>({
            ...prev,
            text: e.target.value
        }))
    }

    const saveComment = ()=>{
        if(comment.text === ""){
            return;
        }
        create(comment);
        setComment({
            text:'',
            commentId:id,
            user:userName
        })
        close();
    }

    return (
        <div>
            <input value={comment.text} onChange={handleText} name="" id="" placeholder={placeholder}></input>
            <div className='flex p-1'>
                <button onClick={()=>saveComment()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Comment</button>
            </div>
        </div>
    );
}

export default AddCommentsForm;