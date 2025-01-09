import { useEffect, useState } from "react";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import AddCard from '../Cards/AddCard';
import CardItem from "../Cards/CardItem";

import { CardsData, CardType, TableData } from "../../types/types";

import data from "../../DataManagment/Data";

interface cardContent {
  [key: string]: CardType;
}

type TableProps={
  tableId:number,
  rename:(arg:TableData)=>void
  table:TableData
}

const Table = ({rename,tableId,table}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(table[tableId].name) ;
  const [active,setActive] = useState<boolean>(false);

  const close=()=>setActive(false);

  const NewName=(e:string)=>{
    let newData:TableData = structuredClone(table);
    newData[tableId].name = e;
    setTableName(e.toString());
    rename(newData);
  }

  const [cardsData,setCardsData] = useState<CardsData>(()=>{
      const newData = data.Get("cardsData");
      if(newData) return JSON.parse(newData);
      else return {};
    });
    
    useEffect(() => {
      data.Set("cardsData",JSON.stringify(cardsData))
    }, [cardsData]);

    let filteredCards:cardContent = cardsData[tableId] || {};
    
  return(
    <li className="board-item" >
      <div className="board__title-wrapper">
        <h2 className="board__title">{tableName}</h2>
        <div>
          <img src={Edit} alt="edit" onClick={()=>setActive(true)}/>
          {active && <Modal active={active} setActive={setActive}>
            <SetDataForm changeData={(e)=>NewName(e)} placeholder="Enter new title" prev={tableName} close={close}/>
          </Modal>}
        </div>
      </div>
      <AddCard updateCardState={setCardsData} tableId={tableId}/>
      <ul className="card__list">
      {Object.entries(filteredCards).map(([key, value]) => (
          <CardItem updateCardState={setCardsData} content={value} key={key} />
        ))} 
      </ul>
    </li>
  );
}

export default Table;