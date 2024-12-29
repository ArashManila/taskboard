import { useEffect, useState } from "react";

import getData from "./DataManagment/getData";

import Modal from "./components/Modal/Modal";
import AuthForm from "./components/Forms/AuthForm";
import Header from "./components/Header/Header";
import Main from "./components/Main";


function App() {
  const [userName,setUserName] = useState<string>('');
  const [isActive,setIsActive] = useState<boolean>(false);
  
    useEffect(()=>{
      if(!getData.Get('User name')){
        setIsActive(true);
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
