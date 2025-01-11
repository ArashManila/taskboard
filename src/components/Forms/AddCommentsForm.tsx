import { useState } from "react";

import utiles from "../../utiles/utiles";

import { CommentsType } from "../../types/types";
import data from "../../DataManagment/Data";


type AddCommentFormProps={
    close:()=>void,
    create: (arg:CommentsType)=>void,
    placeholder:string,
    card:string
}

const AddCommentsForm = ({card,create,close,placeholder}:AddCommentFormProps)=>{
  const id = utiles.makeid(4);
  const userName:string=data.Get("User name") || "defult name";

  const [commentText,setCommentText] = useState<string>('');

  const handleText = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCommentText(e.target.value)
  }

  const saveComment = ()=>{
    if(commentText === "") return;
    const data:CommentsType ={
        text:commentText,
        commentId:id,
        user:userName,
        cardId:card
    }
    create(data);
    close();
  }

  return (
    <div>
      <input value={commentText} onChange={handleText} name="" id="" placeholder={placeholder}></input>
      <div className='flex p-1'>
          <button onClick={()=>saveComment()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Comment</button>
      </div>
    </div>
  );
}

export default AddCommentsForm;