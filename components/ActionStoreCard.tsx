import { MouseEvent, MouseEventHandler, useContext } from "react";

import { MainStoreContext } from "../context/MainStoreContext";
import {
  addCardToData,
  CardDataType,
  PlayerType,
  removeCardFromData,
} from "../pages/demo";
import Card from "./Card";
import CardHalf from "./CardHalf";
type StoreCardPropsType = {
  data: CardDataType;
};
export default function ActionStoreCard({ data }: StoreCardPropsType) {
  const actionStoreContext = useContext(MainStoreContext);
  if (!actionStoreContext) return null;
  const { player1, setPlayer1, setActionStore, setPlayArea } =
    actionStoreContext;

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    if (player1.gold >= data.card.goldCost) {
      setActionStore((prevActionStore: CardDataType[]) => {
        const newActionStore = removeCardFromData(data.card, prevActionStore);
        return newActionStore;
      });
      setPlayArea((prevPlayArea: CardDataType[]) => {
        const newPlayArea = addCardToData(data.card, prevPlayArea);
        return newPlayArea;
      });
      setPlayer1((prevPlayer1: PlayerType) => {
        return { ...prevPlayer1, gold: prevPlayer1.gold - data.card.goldCost };
      });
    }
  };
  return <CardHalf data={data} handleClick={handleClick} />;
}
