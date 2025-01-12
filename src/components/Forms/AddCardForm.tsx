import { useState } from "react";

import utiles from "../../utiles/utiles";

import { CardType } from "../../types/types";

type AddCardFormProps={
  close:()=>void,
  create: (arg:CardType)=>void,
  tid:number
}

const AddCardForm = ({create,close,tid}:AddCardFormProps)=>{

  const id = utiles.makeid(5);

  const [cardTitle,setCardTitle] = useState<string>('');
  const [cardDesc,setCardDesc] = useState<string>('');

  const handleTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCardTitle(e.target.value)
  }
  const handleDesc = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCardDesc(e.target.value)
  }

  const saveCard = ()=>{
    if(cardTitle === "") return;
    const data:CardType ={
      title:cardTitle,
      desc:cardDesc,
      cardId:id,
      tableId:tid
    }
    create(data);
    close();
  }

  return (
    <div>
      <input value={cardTitle} onChange={handleTitle} name="" id="" placeholder='Enter Card Title...'></input>
      <input value={cardDesc} onChange={handleDesc}  name="" id="" placeholder='Enter Card Desc...'></input>
      <div className='flex p-1'>
        <button onClick={()=>saveCard()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Card</button>
      </div>
    </div>
  );
}

export default AddCardForm;