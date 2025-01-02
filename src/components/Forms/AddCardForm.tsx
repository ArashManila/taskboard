import { useState } from "react";

type AddCardFormProps={
    close:()=>void,
    create: (arg:object)=>void
}

const AddCardForm = ({create,close}:AddCardFormProps)=>{

    const [card,setCard] = useState({
        title:'',
        desc:''
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
            desc:''
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