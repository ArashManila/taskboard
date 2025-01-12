import { useState } from "react";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import CardItem from "../Cards/CardItem";

import { cardContent, CardType, TableData } from "../../types/types";
import AddCard from "../Cards/AddCard";


type TableProps={
  tableId:number,
  updateTableData:(arg:TableData)=>void
  table:TableData,
  cardsData:cardContent,
  updateCardData:(arg:CardType)=>void,
  removeCard:(arg1:number,arg2:string)=>void
}

const Table = ({removeCard,updateCardData,cardsData,updateTableData,tableId,table}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(table.name) ;
  const [activeTableNameEdit,setActiveTableNameEdit] = useState<boolean>(false);

  const close=()=>setActiveTableNameEdit(false);

  const setNewTableName=(e:string)=>{
    const newData:TableData = structuredClone(table);
    newData.name = e;
    setTableName(e);
    updateTableData(newData);
  }

  const filteredCards:cardContent = cardsData || {};
  
  return(
    <li className="board-item" >
      <div className="board__title-wrapper">
        <h2 className="board__title">{tableName}</h2>
        <div>
          <img src={Edit} alt="edit" onClick={()=>setActiveTableNameEdit(true)}/>
          {activeTableNameEdit && <Modal active={activeTableNameEdit} setActive={setActiveTableNameEdit}>
            <SetDataForm changeData={(e)=>setNewTableName(e)} placeholder="Enter new title" prev={tableName} close={close}/>
          </Modal>}
        </div>
      </div>
      <AddCard updateCardState={updateCardData} tableId={tableId}/>
      <ul className="card__list">
      {Object.entries(filteredCards).map(([key, value]) => (
          <CardItem remove={removeCard} updateCardState={updateCardData} content={value} key={key} />
        ))} 
      </ul>
    </li>
  );
}

export default Table;