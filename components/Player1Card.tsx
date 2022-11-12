import { MouseEvent, MouseEventHandler, useContext } from "react";

import { ActionType, CropType } from "../cards/CardTypes";
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
  const {
    setPlayer1Hand,
    setPlayArea,
    setPlayer1,
    harvestArea,
    setHarvestArea,
  } = player1AreaContext;
  // TODO: add croparea context
  let cropArea = [];
  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    //  ACTION TYPES SPEND ACTIONS
    if (data.card.type == ActionType) {
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
          action: prevPlayer1.actions - 1 + data.card.actionsGranted,
          buys: prevPlayer1.buys + data.card.buysGranted,
        };
        return newPlayer1;
      });
    } else if (data.card.type == CropType) {
      // PLANT TO CROP AREA
      if (cropArea.length <= 4) {
        // remove from player hand
        setPlayer1Hand((prevPlayer1Hand: CardDataType[]) => {
          const newPlayer1Hand = removeCardFromData(data.card, prevPlayer1Hand);
          return newPlayer1Hand;
        });
        // add to crop area
        setHarvestArea((prevHarvestArea: CardDataType[]) => {
          const newHarvestArea = addCardToData(data.card, prevHarvestArea);
          return newHarvestArea;
        });
        // update player 1
        setPlayer1((prevPlayer1: PlayerType) => {
          const newPlayer1 = {
            ...prevPlayer1,
            gold: prevPlayer1.gold + data.card.goldGranted,
          };
          return newPlayer1;
        });
      }
    } else {
      // OTHER SHIT
      // WARBONDS DO NOTHING
    }
  };
  return <Card data={data} handleClick={handleClick} />;
}
