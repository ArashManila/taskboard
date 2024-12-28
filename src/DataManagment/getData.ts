const Get = (key:string)=>{
  let content = localStorage.getItem(key);
  return content;
}

export default {Get};