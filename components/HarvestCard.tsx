import { useContext } from "react";

import { HarvestAreaContext } from "../context/HarvestAreaContext";
import {
  addCardToData,
  CardDataType,
  PlayerType,
  removeCardFromData,
} from "../pages/demo";
import Card from "./Card";

type HarvestCardPropsType = {
  data: CardDataType;
};
export function HarvestCard({ data }: HarvestCardPropsType) {
  const harvestAreaContext = useContext(HarvestAreaContext);
  if (!harvestAreaContext) return null;
  const { setHarvestArea, setPlayArea, setPlayer1 } = harvestAreaContext;

  function handleClick(e: any) {
    e.preventDefault();
    // remove from harvest area
    setHarvestArea((prevHarvestArea: CardDataType[]) => {
      const newHarvestArea = removeCardFromData(data.card, prevHarvestArea);
      return newHarvestArea;
    });
    // add to play area
    setPlayArea((prevPlayArea: CardDataType[]) => {
      const newPlayArea = addCardToData(data.card, prevPlayArea);
      return newPlayArea;
    });
    // grant the player gold from harvest
    setPlayer1((prevPlayer1: PlayerType) => {
      const newPlayer1 = {
        ...prevPlayer1,
        gold: prevPlayer1.gold + data.card.goldGranted,
      };
      return newPlayer1;
    });
  }

  return (
    <>
      <Card handleClick={handleClick} data={data} />
    </>
  );
}
