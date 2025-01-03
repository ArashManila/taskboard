import { useState } from "react";
import utiles from "../../utiles/utiles";

interface content  {
    title:string,
    desc:string,
    tableId:number,
    cardId:string
  }

type AddCardFormProps={
    close:()=>void,
    create: (arg:content)=>void,
    tid:number
}

const AddCardForm = ({create,close,tid}:AddCardFormProps)=>{

    const id = utiles.makeid(5);
    const [card,setCard] = useState({
        title:'',
        desc:'',
        cardId:id,
        tableId:tid
    });

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setCard((prev)=>({
            ...prev,
            title: e.target.value
        }))
    }
    const handleDesc = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setCard((prev)=>({
            ...prev,
            desc: e.target.value
        }))
    }

    const saveCard = ()=>{
        if(card.title === ""){
            return;
        }
        create(card);
        setCard({
            title:'',
            desc:'',
            cardId:id,
            tableId:tid
        })
        close();
    }

    return (
        <div>
            <input value={card.title} onChange={handleTitle} name="" id="" placeholder='Enter Card Title...'></input>
            <input value={card.desc} onChange={handleDesc}  name="" id="" placeholder='Enter Card Desc...'></input>
            <div className='flex p-1'>
                <button onClick={()=>saveCard()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Card</button>
            </div>
        </div>
    );
}

export default AddCardForm;