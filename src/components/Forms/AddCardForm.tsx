import { useState } from "react";

type AddCardFormProps={
    close:()=>void
}

const AddCardForm = ({create,close}:AddCardFormProps)=>{

    const [card,setCard] = useState({
        title:'',
        desc:''
    });

    const handleTitle = (e)=>{
        setCard((prev)=>({
            ...prev,
            title: e.target.value
        }))
    }
    const handleDesc = (e)=>{
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
            desc:''
        })
        close();
        

    }

    return (
        <div>
            <input value={card.title} onChange={handleTitle} name="" id="" cols="30" rows="2" placeholder='Enter Card Title...'></input>
            <input value={card.desc} onChange={handleDesc}  name="" id="" cols="30" rows="2" placeholder='Enter Card Desc...'></input>
            <div className='flex p-1'>
                <button onClick={()=>saveCard()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Card</button>
            </div>
        </div>
    );
}

export default AddCardForm;