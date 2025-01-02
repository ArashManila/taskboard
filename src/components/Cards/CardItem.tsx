import { useContext, useState } from "react";

import Modal from "../Modal/Modal";
import SetData from "../Forms/SetDataForm";

import edit from "../../icons/edit.png";
import addition from "../../icons/add.png";
import deletion from "../../icons/delete.png";

type content = {
  title:string,
  desc:string,
}
type CardProps={
  content:content,
  title:string
}

const CardItem = ({ content }:CardProps) => {
  const [activeCard, setActiveCard] = useState(false);
  const [activeTitleEdit, setActiveTitleEdit] = useState(false);
  const [activeDescEdit, setActiveDescEdit] = useState(false);
  const [activeDescCreate, setActiveDescCreate] = useState(false);
  
  
  console.log("content",content);
  

  const closeTitle = () => {
    setActiveTitleEdit(false);
  };
  const closeDescEdit = () => {
    setActiveDescEdit(false);
  };
  const closeDescCreate = () => {
    setActiveDescCreate(false);
  };

  // const RemoveCard = (card) => {
  //   const newList = lists.map((c) => {
  //     return {
  //       ...c,
  //       items: c.items.filter((item) => item.id !== card.id),
  //     };
  //   });
  //   setLists(newList);
  // };

  const HandlePopUp = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setActiveTitleEdit(true);
  };

  const HandleDeleteDesc = (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  
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
                  //onClick={() => RemoveCardDesc(cardIndex, columnIndex)}
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
          //onClick={() => RemoveCard(content)}
        >
          Delete
        </button>
        <div>Count of coments: 0</div>
      </div>
      {activeCard && (
        <Modal setActive={setActiveCard} active={activeCard}>
          {/* <CardInfo
            columnIndex={columnIndex}
            cardIndex={cardIndex}
            column={column}
            content={content}
          /> */}
        </Modal>
      )}
      {activeTitleEdit && (
        <Modal setActive={setActiveTitleEdit} active={activeTitleEdit}>
          {/* <SetData
            prev={content.title}
            close={closeTitle}
            //changeData={(e) => ChangeCardTitle(e, columnIndex, cardIndex)}
            placeholder={"Enter new card title:"}
          /> */}
        </Modal>
      )}
      {activeDescEdit && (
        <Modal setActive={setActiveDescEdit} active={activeDescEdit}>
          {/* <SetData
            close={closeDescEdit}
            prev={content.desc}
            //changeData={(e) => setCardDesc(e, columnIndex, cardIndex)}
            placeholder={"Enter new card description:"}
          /> */}
        </Modal>
      )}
      {activeDescCreate && (
        <Modal setActive={setActiveDescCreate} active={activeDescCreate}>
          {/* <SetData
            prev={content.desc}
            close={closeDescCreate}
            //changeData={(e) => setCardDesc(e, columnIndex, cardIndex)}
            placeholder={"Enter new card description:"}
          /> */}
        </Modal>
      )}
    </li>
  );
};

export default CardItem;
