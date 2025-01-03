import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";
import getData from "../../DataManagment/getData";
import setData from "../../DataManagment/setData";

interface content  {
  title:string,
  desc:string,
  tableId:number,
  cardId:string
}

type AddCardProps ={
  tableId:number,
  updateCardState:(arg:object)=>void
}

const AddCard = ({tableId,updateCardState}:AddCardProps) => {
  
  
  const [active, setActive] = useState(false);
  //const [CardState,setCardState] =useState({});

  console.log(getData.GetFornmatted("cardsData")[tableId]);
  

  const CloseModal = () => setActive(false);

  const CreateCard = (data:content)=>{
    let newData=structuredClone(getData.GetFornmatted("cardsData"));
    newData[tableId][data.cardId] = {...data};
    updateCardState(newData);
    setData.SetCardData(tableId,data);
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