import { useState } from "react";
import data from "../../DataManagment/Data";

type AuthProps = {
    setActive:(active:boolean)=> void,
}
const AuthForm = ({setActive}:AuthProps)=>{
    const [name,setName] = useState<string>('');
    function SaveUserName(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        if(!name){
            return;
        }
        else{
            data.Set('User name',name);
            setActive(false);
        }
        
    }
    
    return(
        <>
            <label htmlFor="name">User name:</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name:"/>
            <button onClick={SaveUserName} className="button">Save</button>
        </>
    );
}

export default AuthForm;