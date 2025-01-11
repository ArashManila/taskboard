import { useEffect, useState } from "react";

import data from './DataManagment/Data'

import Modal from "./components/Modal/Modal";
import AuthForm from "./components/Forms/AuthForm";
import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  
  const [isActive,setIsActive] = useState<boolean>(false);
  
    useEffect(()=>{
      if(!data.Get('User name')){
        setIsActive(true);
      }
    },[])

  
  return (
    <>
      {isActive && <Modal active={isActive} setActive ={setIsActive} >
        <AuthForm setActive ={setIsActive}/>
      </Modal>}
      <Header/>
      <Main />
    </>
  )
}

export default App
