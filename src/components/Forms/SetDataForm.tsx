import { useState } from "react";

type DataFormProps={
    placeholder?:string,
    prev:string,
    close:()=>void,
    changeData:(prev:string)=>void
}
const SetDataForm = ({changeData,placeholder,close,prev}: DataFormProps)=>{
        
  const[newData,setNewData] = useState(prev);
  const saveData = ()=>{
    if(!newData) return;
    changeData(newData);
    setNewData('');
    close();
  }
    
  return(
    <div>
      <label htmlFor="ChangeData">{placeholder}</label>
      <input type="text" value={newData} onChange={(e)=>setNewData(e.target.value)} id="ChangeData" maxLength={24}/>
      <button className="button" onClick={()=>saveData()} type="button">Confirm</button>
    </div>
  );
}

export default SetDataForm;