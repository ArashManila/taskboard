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

// TODO: Здесь хранятся не только имена. Название TableNamesData -- не корректно
export interface TableNamesData{
  [key:number]:{
    id:number,
    name:string
  }
}

export interface CommentsObjectType{
  [key:string]: {[key:string]:CommentsType}
}
