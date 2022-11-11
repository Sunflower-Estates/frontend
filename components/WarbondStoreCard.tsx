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
export type SideStoreCardPropsType = {
  data: CardDataType;
};
export default function WarbondStoreCard({ data }: SideStoreCardPropsType) {
  const warbondStoreContext = useContext(MainStoreContext);
  if (!warbondStoreContext) return null;
  const { player1, setPlayer1, setWarbondStore, setPlayArea } =
    warbondStoreContext;

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    if (player1.gold >= data.card.goldCost) {
      setWarbondStore((prevWarbondStore: CardDataType[]) => {
        const newWarbondStore = removeCardFromData(data.card, prevWarbondStore);
        return newWarbondStore;
      });
      setPlayArea((prevPlayArea: CardDataType[]) => {
        const newPlayArea = addCardToData(data.card, prevPlayArea);
        return newPlayArea;
      });
      setPlayer1((prevPlayer1: PlayerType) => {
        const newPlayer1 = {
          ...prevPlayer1,
          gold: prevPlayer1.gold - data.card.goldCost,
        };
        return newPlayer1;
      });
    } else {
      console.log("Player doesn't have enough gold");
    }
  };

  return <CardHalf data={data} handleClick={handleClick} />;
}
