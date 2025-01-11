import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";

import deletion from "../../icons/delete.png";
import edit from "../../icons/edit.png";
import { CommentsType } from "../../types/types";
import { useState } from "react";

type CommentProps={
  content:CommentsType
  remove:(arg1:string,arg2:string)=>void,
  updateCommentsState:(arg:CommentsType)=>void
}
const Comment = ({updateCommentsState,remove, content}:CommentProps)=>{
  const [activeCommentEdit, setActiveCommentEdit] = useState(false);

  const EditComment = (e:string) => {
    const newData=structuredClone(content);
    newData.text = e;
    updateCommentsState(newData);
  };

  const Handle = (e:React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setActiveCommentEdit(true);
  };

  const close = () => {
    setActiveCommentEdit(false);
  };
  return(
    <li className="card__item-comments-item">
            <div className="card__item-comments-item-wrapper">
              <h4 className="card__item-comments-item-title">{content.user}</h4>
              <div className="card__item-comments-item-abilities-wrapper">
                <img
                  src={deletion}
                  alt=""
                  onClick={()=>remove(content.cardId,content.commentId)}
                />
                <img src={edit} alt="" onClick={(e)=>Handle(e)} />
              </div>
            </div>
            <div className="card__item-comments-item-content">{content.text}</div>
            {activeCommentEdit && (
              <Modal
                active={activeCommentEdit}
                setActive={setActiveCommentEdit}
              >
                <SetDataForm
                  prev={content.text}
                  close={close}
                  changeData={(e:string) =>
                    EditComment(e)
                  }
                  placeholder="Enter your comment:"
                />
              </Modal>
            )}
          </li>
  )
}

export default Comment;