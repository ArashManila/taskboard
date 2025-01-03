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

type CommentsType = {
  text:string,
  commentId:string,
  user:string
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

const SetCommentdata = (table:number,newComment:CommentsType)=>{
  let commentsData = localStorage.getItem("commentsData");

  if(commentsData){
    let c:string = commentsData;
    let copy: {[key:number]: {[key:string]:CommentsType}} = JSON.parse(c);
    if(!copy[table]) copy[table] = {};
    copy[table][newComment.commentId]={...copy[table][newComment.commentId],...newComment};
    return localStorage.setItem("commentsData",JSON.stringify(copy));
  } else{
    let newObject: {[key:number]: {[key:string]:CommentsType}} = {};
    newObject[table] = {};
    newObject[table][newComment.commentId] = newComment;
    return localStorage.setItem("commentsData", JSON.stringify(newObject));
  }
}


export default {Set,SetTableData,SetCardData,SetCommentdata};