import { useState } from "react";

import getData from "../../DataManagment/getData";

import Edit from '../../icons/edit.png'

import Modal from "../Modal/Modal";
import SetDataForm from "../Forms/SetDataForm";


type TableProps={
  tableId:number,
}

const Table = ({tableId}:TableProps)=>{
  
  const [tableName,setTableName] = useState<string>(getData.GetFornmatted("Tablesdata")[tableId].name);
  const [active,setActive] = useState<boolean>(false);

  const close=()=>setActive(false);
  
  return(
    <li className="board-item" >
      <div className="board__title-wrapper">
        <h2 className="board__title">{tableName}</h2>
        <div>
          <img src={Edit} alt="edit" onClick={()=>setActive(true)}/>
          {active && <Modal active={active} setActive={setActive}>
            <SetDataForm changeData={setTableName} placeholder="Enter new title" prev={tableName} close={close}/>
          </Modal>}
        </div>
      </div>
    </li>
  );
}

export default Table;