import { useState } from "react";

import Modal from "../Modal/Modal";
import AddCardForm from "../Forms/AddCardForm";
//import getData from "../../DataManagment/getData";
import setData from "../../DataManagment/setData";

type AddCardProps ={
  tableId:number,
}

const AddCard = ({tableId}:AddCardProps) => {
  
  
  const [active, setActive] = useState(false);
  //const [CardState,setCardState] =useState({});


  const CloseModal = () => setActive(false);

  const CreateCard = (data:object)=>{
    setData.SetCardData(tableId,data);
  }

  
  // let tableNameMap = new Map();
  //   tableNameMap.set(
  //     0,{id:0,name:"To-Do"}
  //   )
  //   tableNameMap.set(
  //     1,{id:1,name:"In progress"}
  //   )
  //   tableNameMap.set(
  //     2,{id:2,name:"Testing"}
  //   )
  //   tableNameMap.set(
  //     3,{id:3,name:"Done"}
  //   )
  
  //   const [TableNames,setTableNames] = useState(()=>{
  //     const data = getData.Get("Tablesdata");
  //     return data
  //       ? JSON.parse(data)
  //       : Object.fromEntries(tableNameMap.entries())
  //   });
    
  //   useEffect(() => {
  //     setData.Set("Tablesdata",JSON.stringify(TableNames))
  //   }, [TableNames]);

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
          <AddCardForm create={CreateCard} close={CloseModal}  />
        </Modal>
      )}
    </>
  );
};

export default AddCard;