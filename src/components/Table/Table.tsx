import { useEffect, useState } from "react";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import CardItem from "../Cards/CardItem";

import { CardType, TableData } from "../../types/types";


interface cardContent {
  [key: string]: CardType;
}

type TableProps={
  tableId:number,
  updateTableData:(arg:TableData)=>void
  table:TableData,
  cardsData:cardContent,
  updateCardData:(arg:CardType)=>void
}

const Table = ({updateCardData,cardsData,updateTableData,tableId,table}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(table.name) ;
  const [active,setActive] = useState<boolean>(false);

  const close=()=>setActive(false);

  const setNewTableName=(e:string)=>{
    let newData:TableData = structuredClone(table);
    newData.name = e;
    setTableName(e);
    updateTableData(newData);
  }

  let filteredCards:cardContent = cardsData || {};
  
  return(
    <li className="board-item" >
      <div className="board__title-wrapper">
        <h2 className="board__title">{tableName}</h2>
        <div>
          <img src={Edit} alt="edit" onClick={()=>setActive(true)}/>
          {active && <Modal active={active} setActive={setActive}>
            <SetDataForm changeData={(e)=>setNewTableName(e)} placeholder="Enter new title" prev={tableName} close={close}/>
          </Modal>}
        </div>
      </div>
      {/* <AddCard updateCardState={updateCardData} tableId={tableId}/> */}
      <ul className="card__list">
      {Object.entries(filteredCards).map(([key, value]) => (
          <CardItem updateCardState={updateCardData} content={value} key={key} />
        ))} 
      </ul>
    </li>
  );
}

export default Table;