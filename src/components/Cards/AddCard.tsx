import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";

import { CardType } from "../../types/types";

type AddCardProps ={
  tableId:number,
  updateCardState:(arg:CardType)=>void
}

const AddCard = ({tableId,updateCardState}:AddCardProps) => {
  
  
  const [activeCardCreate, setActiveCardCreate] = useState(false);

  const CloseModal = () => setActiveCardCreate(false);

  const CreateCard = (dataInfo:CardType)=>{
    updateCardState(dataInfo);
  }

  return (
    <>
      <button
        className="button-pink button-add board__item-button-add"
        onClick={()=>setActiveCardCreate(true)}
      >
        +
      </button>
      {activeCardCreate && (
        <Modal active={activeCardCreate} setActive={setActiveCardCreate}>
          <AddCardForm tid={tableId} create={CreateCard} close={CloseModal}  />
        </Modal>
      )}
    </>
  );
};

export default AddCard;