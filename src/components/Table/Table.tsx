import { useEffect, useState } from "react";

import getData from "../../DataManagment/getData";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import AddCard from '../Cards/AddCard';
import CardItem from "../Cards/CardItem";
import setData from "../../DataManagment/setData";

import { CardsData, CardType, TableNamesData } from "../../types/types";

interface cardContent {
  [key: string]: CardType;
}

type TableProps={
  tableId:number,
  rename:(arg:Object)=>void
  // TODO: Каждой таблице не к чему оперировать данными о всех таблицах (В контексте твоей задачи одна таблица вообще ничего не должна знать о других)
  table:TableNamesData
}

const Table = ({rename,tableId,table}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(table[tableId].name) ;
  // TODO: Кто active? по названию стейта совершенно не понятно для чего он предназначен
  const [active,setActive] = useState<boolean>(false);

  const close=()=>setActive(false);

  // TODO: Наименование метода/функции должно быть глаголом (и опять непонятно, почему с большой буквы)
  const NewName=(e:string)=>{
    let newData = structuredClone(table);
    newData[tableId].name = e;
    setTableName(e.toString());
    rename(newData);
  }

  const [cardsData,setCardsData] = useState<CardsData>(()=>{
      const data = getData.Get("cardsData");
      if(data) return JSON.parse(data);
      else return {};
    });
    
    useEffect(() => {
      setData.Set("cardsData",JSON.stringify(cardsData))
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