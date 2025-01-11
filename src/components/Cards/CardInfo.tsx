import {  useEffect, useState } from "react";

import addition from "../../icons/add.png";

import Modal from "../Modal/Modal";
import AddCommentsForm from "../Forms/AddCommentsForm";
import CommentsBlock from "../Comments/CommentsBlock";

import { CardType, CommentsObjectType, CommentsType } from "../../types/types";

import data from "../../DataManagment/Data";

type CardInfoProps={
  content:CardType,
  close:()=>void,
}

const CardInfo = ({ content }:CardInfoProps) => {

  const [activeCommentCreate, setActiveCommentCreate] = useState(false);

  const close = () => setActiveCommentCreate(false);

  const [commentsData,setCommentsData] = useState<CommentsObjectType>(()=>{
    const newData = data.Get("commentsData");
    if(newData) return JSON.parse(newData);
    else return {}
  })
  
  useEffect(()=>{
    data.Set("commentsData",JSON.stringify(commentsData))
  },[commentsData])

  const updateCommentsData = (data:CommentsType)=>{
    setCommentsData((prevComments:CommentsObjectType)=>{
      const newData = structuredClone(prevComments);
      if(!newData[data.cardId]) newData[data.cardId] ={};
      if(!newData[data.cardId][data.commentId]) newData[data.cardId][data.commentId] = {...data}
      newData[data.cardId][data.commentId] = data;
      return newData;
    })
  }

  const removeComment = (card_id:string, comment_id:string)=>{
    setCommentsData((prevCommentsData)=>{
      const newData = structuredClone(prevCommentsData);
      delete newData[card_id][comment_id];
      return newData;
    })
  }
  
  
  return (
    <>
      <h1>{content.title}</h1>
      <div>{content.desc}</div>
      <div>Column: {data.GetFornmatted('Tablesdata')[content.tableId].name}</div>
      <div>User name: {data.Get('User name')}</div>

      <div className="card__item-comments-title-wrapper">
        <h3 className="card__item-comments-title">Comments</h3>
        <div
          onClick={(e) => e.stopPropagation()}
          className="card__item-comments-add-button"
        >
          <img
            onClick={() => setActiveCommentCreate(true)}
            src={addition}
            alt=""
          />
        </div>
      </div>

      <ul className="card__item-comments-block">
        <CommentsBlock
          comments={commentsData[content.cardId]}
          updateCommentsState={updateCommentsData}
          remove={removeComment}
        />
      </ul>

      {activeCommentCreate && (
        <Modal active={activeCommentCreate} setActive={setActiveCommentCreate}>
          <AddCommentsForm
            close={close}
            create={(e:CommentsType) => updateCommentsData(e)}
            placeholder="Enter your comment:"
            card={content.cardId}
          />
        </Modal>
      )}
    </>
  );
};

export default CardInfo;
