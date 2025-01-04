export interface CardType {
  title: string;
  desc: string;
  cardId: string; 
  tableId: number;
}

export interface CommentsType {
  text:string,
  commentId:string,
  user:string
}

export interface CardsData{
  [tableId:number]:{
    [cardId:string]:CardType
  }
}

export interface CommentsObjectType{
  [key:string]: {[key:string]:CommentsType}
}
