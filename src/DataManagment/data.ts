import { CardType, CommentsType } from "../types/types";


const Get = (key:string)=>{
  const content = localStorage.getItem(key);
  return content;
}

const GetFornmatted= (arg:string)=>{
  const parsedContent = localStorage.getItem(arg) || "{}";

  return JSON.parse(parsedContent);
}

const GetTableData = (arg:number)=>{
  if(localStorage.Tablesdata) return JSON.parse(localStorage.Tablesdata)[arg].name ;
  else return '';
}

const Set = (key:string,content:string)=>{
  const result = localStorage.setItem(key,content);
  return result;
}
const SetTableData = (arg:number,newVal:string)=>{
  return localStorage.setItem("Tablesdata",JSON.parse(localStorage.Tablesdata)[arg].name=newVal);
}

const SetCardData = (table: number, value: CardType) => {
  const cardData = localStorage.getItem("cardsData");
  
  if (cardData) {
    const c: string = cardData;
    const copy: { [key: number]: { [key: string]: CardType } } = JSON.parse(c);
    if (!copy[table]) {
        copy[table] = {};
    }
    copy[table][value.cardId] = { ...copy[table][value.cardId], ...value };
    return localStorage.setItem("cardsData", JSON.stringify(copy));
  } else {
    const newObject: { [key: number]: { [key: string]: CardType } } = {};
    newObject[table] = {};
    newObject[table][value.cardId] = value;
    return localStorage.setItem("cardsData", JSON.stringify(newObject));
  }
}

const SetCommentdata = (table:string,newComment:CommentsType)=>{
  const commentsData = localStorage.getItem("commentsData");
  const userName = Get("User name") || 'default name';

  if(commentsData){
    const c:string = commentsData;
    const copy: {[key:string]: {[key:string]:CommentsType}} = JSON.parse(c);
    if(!copy[table]) copy[table] = {};
    copy[table][newComment.commentId]={...copy[table][newComment.commentId],...newComment};
    copy[table][newComment.commentId].user=userName;
    return localStorage.setItem("commentsData",JSON.stringify(copy));
  } else{
    const newObject: {[key:string]: {[key:string]:CommentsType}} = {};
    newObject[table] = {};
    newObject[table][newComment.commentId] = newComment;
    return localStorage.setItem("commentsData", JSON.stringify(newObject));
  }
}

export default {Set,SetTableData,SetCardData,SetCommentdata,Get,GetFornmatted,GetTableData};