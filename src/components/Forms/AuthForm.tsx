import setData from "../../DataManagment/setData";


type AuthProps = {
    name:string,
    setActive:(active:boolean)=> void,
    setName:(e:string)=>void
}
const AuthForm = ({name,setActive,setName}:AuthProps)=>{
    function SaveUserName(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        if(!name){
            return;
        }
        else{
            setData.Set('User name',name);
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