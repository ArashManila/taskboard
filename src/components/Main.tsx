import { useEffect, useState } from "react";
import getData from "../DataManagment/getData";
import setData from "../DataManagment/setData";
import Table from "./Table/Table";


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
    const data = getData.Get("Tablesdata");
    return data
      ? JSON.parse(data)
      : Object.fromEntries(tableNameMap.entries())
  });
  
  useEffect(() => {
    setData.Set("Tablesdata",JSON.stringify(TableNames))
  }, [TableNames]);
  
  return (
    <main className="content container">
      <div className="board">
        <ul className="board__list">
          {TableNames && <Table tableId={0} rename={setTableNames}/>}
          {TableNames && <Table tableId={1} rename={setTableNames}/>}
          {TableNames && <Table tableId={2} rename={setTableNames}/>}
          {TableNames && <Table tableId={3} rename={setTableNames}/>}
        </ul>
      </div>
    </main>
  );
};

export default Main;
