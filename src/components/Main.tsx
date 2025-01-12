import { useEffect, useState } from "react";
import data from "../DataManagment/data";
import { TableData, TablesData } from "../types/types";
import Tables from "./Tables";


const Main = () => {
  const tableNameData = {
    0:{id:0,name:"To-Do"},
    1:{id:1,name:"In progress"},
    2:{id:2,name:"Testing"},
    3:{id:3,name:"Done"}
  }
  
  const [tablesData,setTablesData] = useState<TablesData>(()=>{
    const newData = data.Get("Tablesdata");
    return newData
      ? JSON.parse(newData)
      : tableNameData
  });

  useEffect(() => {
    data.Set("Tablesdata",JSON.stringify(tablesData))
  }, [tablesData]);

  const updateTableData = (data:TableData)=>{
    setTablesData((tables:TablesData)=>{
      const newData = structuredClone(tables);
      newData[data.id]=data;
      return newData;
    })
  }

  return (
    <main className="content container">
      <div className="board">
        <ul className="board__list">
          <Tables tablesData={tablesData} updateTableData={updateTableData}/>
        </ul>
      </div>
    </main>
  );
};

export default Main;
