import { useEffect, useState } from "react";
import Table from "./Table/Table";
import data from "../DataManagment/Data";


const Main = () => {
  let tableNameMap = new Map();
  tableNameMap.set(
    0,{id:0,name:"To-Do"}
  )
  tableNameMap.set(
    1,{id:1,name:"In progress"}
  )
  tableNameMap.set(
    2,{id:2,name:"Testing"}
  )
  tableNameMap.set(
    3,{id:3,name:"Done"}
  )
  

  const [TableNames,setTableNames] = useState(()=>{
    const newData = data.Get("Tablesdata");
    return newData
      ? JSON.parse(newData)
      : Object.fromEntries(tableNameMap.entries())
  });

  
  
  useEffect(() => {
    data.Set("Tablesdata",JSON.stringify(TableNames))
  }, [TableNames]);

  
  
  return (
    <main className="content container">
      <div className="board">
        <ul className="board__list">
          {TableNames && <Table table={TableNames} tableId={0} rename={setTableNames}/>}
          {TableNames && <Table table={TableNames} tableId={1} rename={setTableNames}/>}
          {TableNames && <Table table={TableNames} tableId={2} rename={setTableNames}/>}
          {TableNames && <Table table={TableNames} tableId={3} rename={setTableNames}/>}
        </ul>
      </div>
    </main>
  );
};

export default Main;
