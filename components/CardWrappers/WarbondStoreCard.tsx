import { MouseEvent, MouseEventHandler, useContext } from "react";

import { MainStoreContext } from "../../context/MainStoreContext";
import { PhaseContext } from "../../context/PhaseContext";
import {
  removeCardFromData,
  addCardToData,
} from "../../helpers/CardDataHelper";
import { CardDataType, PhaseType, PlayerType } from "../../pages/demo";
import CardHalf from "../Cards/CardHalf";
export type SideStoreCardPropsType = {
  data: CardDataType;
};
export default function WarbondStoreCard({ data }: SideStoreCardPropsType) {
  const warbondStoreContext = useContext(MainStoreContext);
  const phaseContext = useContext(PhaseContext);
  if (!warbondStoreContext || !phaseContext) return null;
  const { player1, setPlayer1, setWarbondStore, setPlayer1Deck } =
    warbondStoreContext;
  const { phase } = phaseContext;

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    if (phase == PhaseType.BUY) {
      if (player1.gold >= data.card.goldCost) {
        setWarbondStore((prevWarbondStore: CardDataType[]) => {
          const newWarbondStore = removeCardFromData(
            data.card,
            prevWarbondStore
          );
          return newWarbondStore;
        });
        setPlayer1Deck((prevPlayArea: CardDataType[]) => {
          const newPlayArea = addCardToData(data.card, prevPlayArea);
          return newPlayArea;
        });
        setPlayer1((prevPlayer1: PlayerType) => {
          const newPlayer1 = {
            ...prevPlayer1,
            gold: prevPlayer1.gold - data.card.goldCost,
            victory: prevPlayer1.victory + data.card.victoryValue,
          };
          return newPlayer1;
        });
      } else {
        console.log("Player doesn't have enough gold");
      }
    }
  };

  return <CardHalf data={data} handleClick={handleClick} />;
}
