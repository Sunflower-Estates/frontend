import { MouseEvent, MouseEventHandler, useContext } from "react";

import { Player1AreaContext } from "../context/Player1AreaContext";
import {
  addCardToData,
  CardDataType,
  PlayerType,
  removeCardFromData,
} from "../pages/demo";
import Card from "./Card";

type Player1CardPropsType = {
  data: CardDataType;
};

export default function Player1Card({ data }: Player1CardPropsType) {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { setPlayer1Hand, setPlayArea, setPlayer1 } = player1AreaContext;

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    setPlayer1Hand((prevPlayer1Hand: CardDataType[]) => {
      const newPlayer1Hand = removeCardFromData(data.card, prevPlayer1Hand);
      return newPlayer1Hand;
    });
    setPlayArea((prevPlayArea: CardDataType[]) => {
      const newPlayArea = addCardToData(data.card, prevPlayArea);
      return newPlayArea;
    });
    setPlayer1((prevPlayer1: PlayerType) => {
      const newPlayer1 = {
        ...prevPlayer1,
        gold: prevPlayer1.gold + data.card.goldGranted,
      };
      return newPlayer1;
    });
  };
  return <Card data={data} handleClick={handleClick} />;
}
