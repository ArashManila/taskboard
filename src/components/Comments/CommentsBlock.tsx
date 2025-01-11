import { useState } from "react";

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";

import deletion from "../../icons/delete.png";
import edit from "../../icons/edit.png";

import { CommentsType } from "../../types/types";
// import data from "../../DataManagment/Data";

type CommentBlockProps={
  comments: {[key: string]: CommentsType},
  updateCommentsState:(arg:CommentsType)=>void,
  card:string,
  remove: (arg1:string,arg2:string)=>void
}

const CommentsBlock = ({ remove,comments,updateCommentsState,card }:CommentBlockProps) => {

  const [activeCommentEdit, setActiveCommentEdit] = useState(false);


  // const RemoveComment = (comment_id:string)=>{
  //   const newData=structuredClone(data.GetFornmatted("commentsData"));
  //   delete newData[card][comment_id];
  //   updateCommentsState(newData);
  // }

  const EditComment = (e:string,comment_id:string) => {
    const newData=structuredClone(comments);
    newData[comment_id].text = e;
    updateCommentsState(newData[card]);
  };

  const Handle = (e:React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setActiveCommentEdit(true);
  };

  const close = () => {
    setActiveCommentEdit(false);
  };

  return (
    <>
      {comments ? (
        Object.entries(comments).map(([key,value]) => (
          <li key={key} className="card__item-comments-item">
            <div className="card__item-comments-item-wrapper">
              <h4 className="card__item-comments-item-title">{value.user}</h4>
              <div className="card__item-comments-item-abilities-wrapper">
                <img
                  src={deletion}
                  alt=""
                  onClick={()=>remove(value.cardId,value.commentId)}
                />
                <img src={edit} alt="" onClick={Handle} />
              </div>
            </div>
            <div className="card__item-comments-item-content">{value.text}</div>
            {activeCommentEdit && (
              <Modal
                active={activeCommentEdit}
                setActive={setActiveCommentEdit}
              >
                <SetDataForm
                  prev={value.text}
                  close={close}
                  changeData={(e:string) =>
                    EditComment(e, value.commentId)
                  }
                  placeholder="Enter your comment:"
                />
              </Modal>
            )}
          </li>
        ))
      ) : (
        <h4>No comments</h4>
      )}
    </>
  );
};

export default CommentsBlock;
