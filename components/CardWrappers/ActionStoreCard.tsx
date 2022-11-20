import { MouseEvent, MouseEventHandler, useContext } from "react";

import { MainStoreContext } from "../../context/MainStoreContext";
import { PhaseContext } from "../../context/PhaseContext";
import {
  addCardToData,
  CardDataType,
  PhaseType,
  PlayerType,
  removeCardFromData,
} from "../../pages/demo";
import CardHalf from "../Cards/CardHalf";
type StoreCardPropsType = {
  data: CardDataType;
};
export default function ActionStoreCard({ data }: StoreCardPropsType) {
  const phaseContext = useContext(PhaseContext);
  const actionStoreContext = useContext(MainStoreContext);
  if (!actionStoreContext || !phaseContext) return null;
  const { player1, setPlayer1, setActionStore, setPlayArea, setPlayer1Deck } =
    actionStoreContext;
  const { phase, setPhase } = phaseContext;

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    if (phase == PhaseType.BUY) {
      if (player1.gold >= data.card.goldCost) {
        setActionStore((prevActionStore: CardDataType[]) => {
          const newActionStore = removeCardFromData(data.card, prevActionStore);
          return newActionStore;
        });
        setPlayer1Deck((prevPlayer1Deck: CardDataType[]) => {
          const newPlayer1Deck = addCardToData(data.card, prevPlayer1Deck);
          return newPlayer1Deck;
        });
        setPlayer1((prevPlayer1: PlayerType) => {
          return {
            ...prevPlayer1,
            gold: prevPlayer1.gold - data.card.goldCost,
          };
        });
      }
    }
  };
  return <CardHalf data={data} handleClick={handleClick} />;
}
