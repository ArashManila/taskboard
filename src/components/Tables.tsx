import { useEffect, useState } from "react";

import { CardsData, CardType, TableData, TablesData } from "../types/types"

import data from "../DataManagment/Data";
import Table from "./Table/Table";


type TablesProps={
  tablesData: TablesData,
  updateTableData:(arg:TableData)=>void
}

const Tables = ({tablesData,updateTableData}:TablesProps)=>{

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
      {tablesData && <Table table={tablesData[0]} updateCardData={updateCardData} cardsData={cardsData[0]} tableId={0} updateTableData={updateTableData}/>}
      {tablesData && <Table table={tablesData[1]} updateCardData={updateCardData} cardsData={cardsData[1]} tableId={1} updateTableData={updateTableData}/>}
      {tablesData && <Table table={tablesData[2]} updateCardData={updateCardData} cardsData={cardsData[2]} tableId={2} updateTableData={updateTableData}/>}
      {tablesData && <Table table={tablesData[3]} updateCardData={updateCardData} cardsData={cardsData[3]} tableId={3} updateTableData={updateTableData}/>}
    </>
  )
}

export default Tables