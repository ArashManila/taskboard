const Set = (key:string,content:string)=>{
  let result = localStorage.setItem(key,content);
  return result;
}
const SetTableData = (arg:number,newVal:string)=>{
  return localStorage.setItem("Tablesdata",JSON.parse(localStorage.Tablesdata)[arg].name=newVal);
}
type ValueType = {
  title: string;
  desc: string;
  cardId: string; 
  tableId: number;
}

const SetCardData = (table: number, value: ValueType) => {
  let cardData = localStorage.getItem("cardsData");
  
  if (cardData) {
      let c: string = cardData;
      let copy: { [key: number]: { [key: string]: ValueType } } = JSON.parse(c);
      if (!copy[table]) {
          copy[table] = {};
      }
      copy[table][value.cardId] = { ...copy[table][value.cardId], ...value };
      return localStorage.setItem("cardsData", JSON.stringify(copy));
  } else {
      let newObject: { [key: number]: { [key: string]: ValueType } } = {};
      newObject[table] = {};
      newObject[table][value.cardId] = value;
      return localStorage.setItem("cardsData", JSON.stringify(newObject));
  }
}


export default {Set,SetTableData,SetCardData};