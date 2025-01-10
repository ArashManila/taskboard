import { useState } from "react";

import Modal from "../Modal/Modal";

import edit from "../../icons/edit.png";
import addition from "../../icons/add.png";
import deletion from "../../icons/delete.png";

import SetDataForm from "../Forms/SetDataForm";
import CardInfo from "./CardInfo";

import { CardsData, CardType } from "../../types/types";
import data from "../../DataManagment/Data";


type CardProps={
  content:CardType,
  updateCardState:(arg:CardType)=>void
}

const CardItem = ({ content,updateCardState }:CardProps) => {
  const [activeCard, setActiveCard] = useState(false);
  const [activeTitleEdit, setActiveTitleEdit] = useState(false);
  const [activeDescEdit, setActiveDescEdit] = useState(false);
  const [activeDescCreate, setActiveDescCreate] = useState(false);
  
  
  const closeTitle = () => {
    setActiveTitleEdit(false);
  };
  const closeDescEdit = () => {
    setActiveDescEdit(false);
  };
  const closeDescCreate = () => {
    setActiveDescCreate(false);
  };
  const closeCardInfo=()=>{
    setActiveCard(false)
  }

  const RemoveCard = (card_id:string)=>{
    let newData=structuredClone(data.GetFornmatted("cardsData"));
    delete newData[content.tableId][card_id];
    updateCardState(newData);
  }

  const RemoveCardDesc = (table_id:number,card_id:string)=>{
    let newData=structuredClone(content);
    newData.desc = "";
    updateCardState(newData);
  }

  const setCardDesc = (newDesc:string)=>{
    let newData=structuredClone(content);
    newData.desc=newDesc;
    updateCardState(newData);
  }
  const ChangeCardTitle = (newTitle:string)=>{
    let newData=structuredClone(content);
    newData.title=newTitle;
    updateCardState(newData);
  }

  const HandlePopUp = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setActiveTitleEdit(true);
  };

  const HandleDeleteDesc = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  let commentsCount:number = data.GetFornmatted("commentsData")[content.cardId] || 0;
  let commentsNumber=Object.values(commentsCount).length;
  
  return (
    <li className="card__item" onClick={() => setActiveCard(true)}>
      <div className="card__item-title-wrapper">
        <h3 className="card__item-title">
          <p>{content.title}</p>
        </h3>
        <div className="card__item-title-link" onClick={HandlePopUp}>
          <img src={edit} alt="Edit" />
        </div>
      </div>

      <div className="card__item-desc">
        <div>{content.desc}</div>

        <div className="card__item-desc-options">
          {content.desc ? (
            <>
              <div onClick={HandleDeleteDesc}>
                <img
                  onClick={() => RemoveCardDesc(content.tableId, content.cardId)}
                  src={deletion}
                  alt=""
                />
              </div>

              <div onClick={HandleDeleteDesc}>
                <img
                  onClick={() => setActiveDescEdit(true)}
                  src={edit}
                  alt=""
                />
              </div>
            </>
          ) : (
            <div onClick={HandleDeleteDesc}>
              <img
                onClick={() => setActiveDescCreate(true)}
                src={addition}
                alt=""
              />
            </div>
          )}
        </div>
      </div>

      <div className="card__item-footer">
        <button
          className="card__item-footer-button button button-pink"
          type="button"
          onClick={() => RemoveCard(content.cardId)}
        >
          Delete
        </button>
        <div>Count of coments: {commentsNumber}</div>
      </div>
      {activeCard && (
        <Modal setActive={setActiveCard} active={activeCard}>
          <CardInfo
            content={content}
            close={closeCardInfo}
          />
        </Modal>
      )}
      {activeTitleEdit && (
        <Modal setActive={setActiveTitleEdit} active={activeTitleEdit}>
          <SetDataForm
            prev={content.title}
            close={closeTitle}
            changeData={(e:string) => ChangeCardTitle(e)}
            placeholder={"Enter new card title:"}
          />
        </Modal>
      )}
      {activeDescEdit && (
        <Modal setActive={setActiveDescEdit} active={activeDescEdit}>
          <SetDataForm
            close={closeDescEdit}
            prev={content.desc}
            changeData={(e:string) => setCardDesc(e)}
            placeholder={"Enter new card description:"}
          />
        </Modal>
      )}
      {activeDescCreate && (
        <Modal setActive={setActiveDescCreate} active={activeDescCreate}>
          <SetDataForm
            prev={content.desc}
            close={closeDescCreate}
            changeData={(e:string) => setCardDesc(e)}
            placeholder={"Enter new card description:"}
          />
        </Modal>
      )}
    </li>
  );
};

export default CardItem;
