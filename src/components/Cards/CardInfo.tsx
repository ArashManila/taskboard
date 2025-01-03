import { useState } from "react";

import addition from "../../icons/add.png";

import Modal from "../Modal/Modal";
//import SetData from "../Forms/SetDataForm";
import getData from "../../DataManagment/getData";
import setData from "../../DataManagment/setData";
import SetDataForm from "../Forms/SetDataForm";
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
  user:string
}

const CardInfo = ({ content }:CardInfoProps) => {

  const [activeCommentCreate, setActiveCommentCreate] = useState(false);

  //const close = () => setActiveCommentCreate(false);

  // const CreateCard = (data:content)=>{
  //     setData.SetCardData(tableId,data);
  //     let newData=structuredClone(getData.GetFornmatted("cardsData"));
  //     newData[tableId][data.cardId] = {...data};
  //     updateCardState(newData);
  //   }
  const CreateComment = (data:CommentsType)=>{
    setData.SetCommentdata(content.tableId,data)
  }
  

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
        {/* <CommentsBlock
          columnIndex={columnIndex}
          cardIndex={cardIndex}
          comments={content.comments}
        /> */}
      </ul>

      {activeCommentCreate && (
        <Modal active={activeCommentCreate} setActive={setActiveCommentCreate}>
          <SetDataForm
            prev={""}
            close={close}
            changeData={(e:string) => CreateComment(e)}
            placeholder="Enter your comment:"
          />
        </Modal>
      )}
    </>
  );
};

export default CardInfo;
