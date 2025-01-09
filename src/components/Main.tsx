import { useEffect, useState } from "react";
import getData from "../DataManagment/getData";
import setData from "../DataManagment/setData";
import Table from "./Table/Table";


const Main = () => {
  // TODO: Почему бы не обычный объект? По синтаксису было бы проще, нет необходимости в Map
  // TODO: Используй const там, где это можно
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
  

  // TODO: Какой тип данных у TableNames? Это должно быть описано на уровне TS.
  //  Здесь переменная называется как TableNames (почему-то с большой буквы), а дальше используется как table.
  //  Судя по коду там хранятся не только именна, поэтому непонятно, почему выбрано такое название (TableNames).
  //  Все это вносит путаницу, которой можно было бы избежать как раз с помощью ts
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
