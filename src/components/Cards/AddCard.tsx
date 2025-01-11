import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";

import { CardType } from "../../types/types";

type AddCardProps ={
  tableId:number,
  updateCardState:(arg:CardType)=>void
}

const AddCard = ({tableId,updateCardState}:AddCardProps) => {
  
  
  const [active, setActive] = useState(false);

  const CloseModal = () => setActive(false);

  const CreateCard = (dataInfo:CardType)=>{
    updateCardState(dataInfo);
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