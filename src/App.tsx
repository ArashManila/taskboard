import { useEffect, useState } from "react";

// TODO: Не называй объекты глаголом, так называются функции
import getData from "./DataManagment/getData";

import Modal from "./components/Modal/Modal";
import AuthForm from "./components/Forms/AuthForm";
import Header from "./components/Header/Header";
import Main from "./components/Main";


function App() {
  // TODO: Очевидно, что это локальный стейт формы аутентификации, зачем он вынесен в глобальный app?
  const [userName,setUserName] = useState<string>('');
  const [isActive,setIsActive] = useState<boolean>(false);
  
    useEffect(()=>{
      if(!getData.Get('User name')){
        setIsActive(true);
        console.log(getData.Get('User name'));
        
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
