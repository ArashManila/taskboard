const Get = (key:string)=>{
  let content = localStorage.getItem(key) || "{}";
  return content;
}

const GetFornmatted= (arg:string)=>{
  let parsedContent = localStorage.getItem(arg) || "{}";

  return JSON.parse(parsedContent);
}

export default {Get,GetFornmatted};