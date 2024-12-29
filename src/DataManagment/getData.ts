const Get = (key:string)=>{
  let content = localStorage.getItem(key);
  return content;
}

const GetFornmatted= (arg:string)=>{
  let parsedContent = localStorage.getItem(arg) || "{}";

  return JSON.parse(parsedContent);
}

const GetTableData = (arg:number)=>{
  return JSON.parse(localStorage.Tablesdata)[arg].name || '';
}

export default {Get,GetFornmatted,GetTableData};