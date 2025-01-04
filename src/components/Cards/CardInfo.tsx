import { useEffect, useState } from "react";

import addition from "../../icons/add.png";

import Modal from "../Modal/Modal";
//import SetData from "../Forms/SetDataForm";
import getData from "../../DataManagment/getData";
import setData from "../../DataManagment/setData";
import AddCommentsForm from "../Forms/AddCommentsForm";
import CommentsBlock from "../Comments/CommentsBlock";
//import Utils from "../../utiles/utiles";

interface content  {
  title:string,
  desc:string,
  tableId:number,
  cardId:string
}

type CardInfoProps={
  content:content
}

type CommentsType = {
  text:string,
  commentId:string,
}
type CommentsObjectType={
  [key:string]: {[key:string]:CommentsType}
}

const CardInfo = ({ content }:CardInfoProps) => {

  const [activeCommentCreate, setActiveCommentCreate] = useState(false);

  const close = () => setActiveCommentCreate(false);

  const [commentsData,setCommentsData] = useState<CommentsObjectType>(()=>{
    const data = getData.Get("commentsData");
    if(data) return JSON.parse(data);
    else return {}
  })

  useEffect(()=>{
    setData.Set("commentsData",JSON.stringify(commentsData))
  },[commentsData])

  const CreateComment = (data:CommentsType)=>{
    setData.SetCommentdata(content.cardId,data);
    let newData = structuredClone(getData.GetFornmatted("commentsData"));
    setCommentsData(newData);
  }
  
  let filteredComments: { [key: string]: CommentsType } = commentsData[content.cardId];
  
  return (
    <>
      <h1>{content.title}</h1>
      <div>{content.desc}</div>
      <div>Column: {getData.GetFornmatted('Tablesdata')[content.tableId].name}</div>
      <div>User name: {getData.Get('User name')}</div>

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
          comments={filteredComments}
          updateCommentsState={setCommentsData}
          card={content.cardId}
        />
      </ul>

      {activeCommentCreate && (
        <Modal active={activeCommentCreate} setActive={setActiveCommentCreate}>
          <AddCommentsForm
            close={close}
            create={(e:CommentsType) => CreateComment(e)}
            placeholder="Enter your comment:"
          />
        </Modal>
      )}
    </>
  );
};

export default CardInfo;
