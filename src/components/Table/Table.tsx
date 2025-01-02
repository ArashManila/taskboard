import { useEffect, useState } from "react";

import getData from "../../DataManagment/getData";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";
import AddCard from '../Cards/AddCard';
import utiles from "../../utiles/utiles";
import CardItem from "../Cards/CardItem";
import setData from "../../DataManagment/setData";



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

  let cardsMap = new Map();
  cardsMap.set(
    tableId,{id:utiles.makeid(5),title:"placeholder title",desc:"placeholder desc",column:tableId}
  )

  const [cardsData,setCardsData] = useState<object>(()=>{
      const data = getData.Get("CardsData");
      if(data) return JSON.parse(data);
      else return {};
    });
    
    
    
    useEffect(() => {
      setData.Set("CardsData",JSON.stringify(cardsData))
    }, [cardsData]);
    
  
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
      <AddCard tableId={tableId}/>
      <ul className="card__list">
        {cardsData && Object.entries(cardsData).map(([key,value])=>{
          if(Number(key) === tableId){
            return <CardItem content={value} key={value.id}/>
          }
        })} 
      </ul>
    </li>
  );
}

export default Table;