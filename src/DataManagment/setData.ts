const Set = (key:string,content:string)=>{
  let result = localStorage.setItem(key,content);
  return result;
}
const SetTableData = (arg:number,newVal:string)=>{
  return localStorage.setItem("Tablesdata",JSON.parse(localStorage.Tablesdata)[arg].name=newVal);
}
const SetCardData = (table:number,value:object)=>{
  let cardData = localStorage.getItem("cardsData")
  if(cardData){
    let c:string  = cardData;
    let copy = {...JSON.parse(c)};
    console.log("copy:",copy[1]);
    console.log("value:",value);
    let res = Object.assign(copy,value);
    return localStorage.setItem("cardsData",JSON.stringify(res));
  }
  else{
    let newObject:{[key:number]:object} = {};
    newObject[table] = value;
    
    return localStorage.setItem("cardsData",JSON.stringify(newObject))
  }
}


export default {Set,SetTableData,SetCardData};