import { useContext } from "react";

import { CropType } from "../cards/CardTypes";
import { PlayAreaContext } from "../context/PlayAreaContext";
import { addCardToData, CardDataType, removeCardFromData } from "../pages/demo";
import Card from "./Card";

type PlayAreaCardPropsType = {
  data: CardDataType;
};

export function PlayAreaCard({ data }: PlayAreaCardPropsType) {
  const playAreaContext = useContext(PlayAreaContext);
  if (!playAreaContext) return null;
  const { playArea, setPlayArea, setHarvestArea } = playAreaContext;

  function handleClick(e: any) {
    e.preventDefault();
    if (data.card.type == CropType) {
      setPlayArea((prevPlayArea: CardDataType[]) => {
        return removeCardFromData(data.card, prevPlayArea);
      });
      setHarvestArea((prevHarvestArea: CardDataType[]) => {
        return addCardToData(data.card, prevHarvestArea);
      });
    }
  }
  return (
    <>
      <Card data={data} handleClick={handleClick}></Card>
    </>
  );
}
