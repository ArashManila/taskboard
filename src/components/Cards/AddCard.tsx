import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";

import { CardsData, CardType } from "../../types/types";
import data from "../../DataManagment/Data";

type AddCardProps ={
  tableId:number,
  updateCardState:React.Dispatch<React.SetStateAction<CardsData>>
}

const AddCard = ({tableId,updateCardState}:AddCardProps) => {
  
  
  const [active, setActive] = useState(false);

  const CloseModal = () => setActive(false);

  const CreateCard = (dataInfo:CardType)=>{
    data.SetCardData(tableId,dataInfo);
    let newData=structuredClone(data.GetFornmatted("cardsData"));
    newData[tableId][dataInfo.cardId] = {...dataInfo};
    updateCardState(newData);
  }

  return (
    <>
      <button
        className="button-pink button-add board__item-button-add"
        onClick={()=>setActive(true)}
      >
        +
      </button>
      {active && (
        <Modal active={active} setActive={setActive}>
          <AddCardForm tid={tableId} create={CreateCard} close={CloseModal}  />
        </Modal>
      )}
    </>
  );
};

export default AddCard;