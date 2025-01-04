import { useEffect, useState } from "react";

import getData from "../../DataManagment/getData";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import AddCard from '../Cards/AddCard';
import CardItem from "../Cards/CardItem";
import setData from "../../DataManagment/setData";

import { CardsData, CardType } from "../../types/types";

interface cardContent {
  [key: string]: CardType;
}

type TableProps={
  tableId:number,
  rename:(arg:Object)=>void
}

const Table = ({rename,tableId}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(getData.GetTableData(tableId)) ;
  const [active,setActive] = useState<boolean>(false);

  const close=()=>setActive(false);

  const NewName=(e:string)=>{
    let newData = structuredClone(getData.GetFornmatted('Tablesdata'));
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