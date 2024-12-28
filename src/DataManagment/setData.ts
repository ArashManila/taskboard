const Set = (key:string,content:string)=>{
  let result = localStorage.setItem(key,content);
  return result;
}

export default {Set};