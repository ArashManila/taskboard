import { useEffect, useState } from "react";
import Table from "./Table/Table";
import data from "../DataManagment/Data";
import { TableData } from "../types/types";


const Main = () => {
  const tableNameData = {
    0:{id:0,name:"To-Do"},
    1:{id:1,name:"In progress"},
    2:{id:2,name:"Testing"},
    3:{id:3,name:"Done"}
  }
  

  const [tablesData,setTablesData] = useState<TableData>(()=>{
    const newData = data.Get("Tablesdata");
    return newData
      ? JSON.parse(newData)
      : tableNameData
  });

  
  
  useEffect(() => {
    data.Set("Tablesdata",JSON.stringify(tablesData))
  }, [tablesData]);

  
  
  return (
    <main className="content container">
      <div className="board">
        <ul className="board__list">
          {tablesData && <Table table={tablesData} tableId={0} rename={setTablesData}/>}
          {tablesData && <Table table={tablesData} tableId={1} rename={setTablesData}/>}
          {tablesData && <Table table={tablesData} tableId={2} rename={setTablesData}/>}
          {tablesData && <Table table={tablesData} tableId={3} rename={setTablesData}/>}
        </ul>
      </div>
    </main>
  );
};

export default Main;
