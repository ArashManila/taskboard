import { useState } from "react";

import addition from "../../icons/add.png";

import Modal from "../Modal/Modal";
//import SetData from "../Forms/SetDataForm";
import getData from "../../DataManagment/getData";
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

const CardInfo = ({ content }:CardInfoProps) => {

  const [activeCommentCreate, setActiveCommentCreate] = useState(false);

  //const close = () => setActiveCommentCreate(false);
  

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
          {/* <SetData
            prev={""}
            close={close}
            changeData={(e) => SetCardComment(e, columnIndex, cardIndex)}
            placeholder="Enter your comment:"
          /> */}
        </Modal>
      )}
    </>
  );
};

export default CardInfo;
