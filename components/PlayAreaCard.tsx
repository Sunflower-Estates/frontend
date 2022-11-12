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
    // NO ACTION CARDS ARE CLICKED
  }
  return (
    <>
      <Card data={data} handleClick={handleClick}></Card>
    </>
  );
}
