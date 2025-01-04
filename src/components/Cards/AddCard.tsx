import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";
import getData from "../../DataManagment/getData";
import setData from "../../DataManagment/setData";

import { CardsData, CardType } from "../../types/types";

type AddCardProps ={
  tableId:number,
  updateCardState:React.Dispatch<React.SetStateAction<CardsData>>
}

const AddCard = ({tableId,updateCardState}:AddCardProps) => {
  
  
  const [active, setActive] = useState(false);

  const CloseModal = () => setActive(false);

  const CreateCard = (data:CardType)=>{
    setData.SetCardData(tableId,data);
    let newData=structuredClone(getData.GetFornmatted("cardsData"));
    newData[tableId][data.cardId] = {...data};
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