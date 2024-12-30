import { ReactNode, useCallback, useEffect } from "react";
import getData from "../../DataManagment/getData";

type ModalProps = {
  active:boolean,
  children?:ReactNode,
  setActive:(active:boolean)=>void,
}

const Modal=({active,setActive,children}:ModalProps)=>{
    
    const escFunction = useCallback((event:KeyboardEvent) => {
      event.stopPropagation();
        if (event.key === "Escape" && getData.Get('User name')) setActive(false);
    }, []);
    
    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
  
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, [escFunction]);
    
    const CloseFunction = ()=>{
      if(getData.Get('User name')) setActive(false); 
    }
        
    return(
      <>
        <div className={active ? "modal active" : "modal"} onClick={CloseFunction}>
          <div className="modalContent" onClick={(e)=>e.stopPropagation()}>
            {children}
          </div>
        </div>
      </>
    );
}

export default Modal;