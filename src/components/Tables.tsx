import { useEffect, useState } from "react";
import { CardsData, CardType, TableData, TablesData } from "../types/types"
import data from "../DataManagment/Data";


type TablesProps={
  tables: TablesData,
  updateTableData:(arg:TableData)=>void
}

const Tables = ({tables,updateTableData}:TablesProps)=>{

  const [cardsData,setCardsData] = useState<CardsData>(()=>{
    const newData = data.Get("cardsData");
    if(newData) return JSON.parse(newData);
    else return {};
  });

  useEffect(() => {
    data.Set("cardsData",JSON.stringify(cardsData))
  }, [cardsData]);

  const updateCardData = (data: CardType) => {
    setCardsData((cards: CardsData) => {
      const newCardsData = JSON.parse(JSON.stringify(cards));
      newCardsData[data.tableId][data.cardId] = data;
      return newCardsData;
    })
  }

  return(
    <>
    </>
  )
}

export default Tables