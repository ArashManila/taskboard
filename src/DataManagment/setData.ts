const Set = (key:string,content:string)=>{
  let result = localStorage.setItem(key,content);
  return result;
}
const SetTableData = (arg:number,newVal:string)=>{
  return localStorage.setItem("Tablesdata",JSON.parse(localStorage.Tablesdata)[arg].name=newVal);
}
const SetCardData = (arg:number,value:object)=>{
  let cardData = localStorage.getItem("cardsData")
  if(cardData){
    let c:string  = cardData;
    let copy = {...JSON.parse(c)};
    return copy;
  }
  else{
    return localStorage.setItem("cardsData",JSON.stringify(value))
  }
}


export default {Set,SetTableData,SetCardData};