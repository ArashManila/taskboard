import { CardType, CommentsType } from "../types/types";
import getData from "./getData";

const Set = (key:string,content:string)=>{
  let result = localStorage.setItem(key,content);
  return result;
}
const SetTableData = (arg:number,newVal:string)=>{
  return localStorage.setItem("Tablesdata",JSON.parse(localStorage.Tablesdata)[arg].name=newVal);
}

const SetCardData = (table: number, value: CardType) => {
  let cardData = localStorage.getItem("cardsData");
  
  if (cardData) {
      let c: string = cardData;
      let copy: { [key: number]: { [key: string]: CardType } } = JSON.parse(c);
      if (!copy[table]) {
          copy[table] = {};
      }
      copy[table][value.cardId] = { ...copy[table][value.cardId], ...value };
      return localStorage.setItem("cardsData", JSON.stringify(copy));
  } else {
      let newObject: { [key: number]: { [key: string]: CardType } } = {};
      newObject[table] = {};
      newObject[table][value.cardId] = value;
      return localStorage.setItem("cardsData", JSON.stringify(newObject));
  }
}

const SetCommentdata = (table:string,newComment:CommentsType)=>{
  let commentsData = localStorage.getItem("commentsData");
  let userName = getData.Get("User name") || 'default name';

  if(commentsData){
    let c:string = commentsData;
    let copy: {[key:string]: {[key:string]:CommentsType}} = JSON.parse(c);
    if(!copy[table]) copy[table] = {};
    copy[table][newComment.commentId]={...copy[table][newComment.commentId],...newComment};
    copy[table][newComment.commentId].user=userName;
    return localStorage.setItem("commentsData",JSON.stringify(copy));
  } else{
    let newObject: {[key:string]: {[key:string]:CommentsType}} = {};
    newObject[table] = {};
    newObject[table][newComment.commentId] = newComment;
    return localStorage.setItem("commentsData", JSON.stringify(newObject));
  }
}

// TODO: Странное решение -- разделять получение и установку данных на разные сервисы в данном контексте
export default {Set,SetTableData,SetCardData,SetCommentdata};