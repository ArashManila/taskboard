import { useEffect, useState } from "react";

import data from './DataManagment/Data'

import Modal from "./components/Modal/Modal";
import AuthForm from "./components/Forms/AuthForm";
import Header from "./components/Header/Header";
import Main from "./components/Main";


function App() {
  const [userName,setUserName] = useState<string>('');
  const [isActive,setIsActive] = useState<boolean>(false);
  
    useEffect(()=>{
      if(!data.Get('User name')){
        setIsActive(true);
        console.log(data.Get('User name'));
        
      }
    },[])

  
  return (
    <>
      {isActive && <Modal active={isActive} setActive ={setIsActive} >
        <AuthForm setActive ={setIsActive} name={userName} setName={setUserName}/>
      </Modal>}
      <Header/>
      <Main />
    </>
  )
}

export default App
