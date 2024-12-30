const Get = (key:string)=>{
  let content = localStorage.getItem(key);
  return content;
}

const GetFornmatted= (arg:string)=>{
  let parsedContent = localStorage.getItem(arg) || "{}";

  return JSON.parse(parsedContent);
}

const GetTableData = (arg:number)=>{
  if(localStorage.Tablesdata) return JSON.parse(localStorage.Tablesdata)[arg].name ;
  else return '';
}

export default {Get,GetFornmatted,GetTableData};