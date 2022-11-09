import { MouseEventHandler, useContext } from "react";

import { CardType } from "../cards/Cards";
import { CropStoreContext } from "../context/CropStoreContext";
import {
  addCardToData,
  CardDataType,
  PlayerType,
  removeCardFromData,
} from "../pages/demo";
import Card from "./Card";

export function CropStore() {
  const cropStoreContext = useContext(CropStoreContext);
  if (!cropStoreContext) return null;
  const {
    cropStore,
    setCropStore,
    playArea,
    setPlayArea,
    player1,
    setPlayer1,
  } = cropStoreContext;

  function handleCardClick(card: CardType) {
    if (player1.gold >= card.goldCost) {
      setPlayArea((prevArea: CardDataType[]) => {
        let newPlayArea = addCardToData(card, prevArea);
        return newPlayArea;
      });
      setCropStore((prevCropStore: CardDataType[]) => {
        let newCropStore = removeCardFromData(card, prevCropStore);
        return newCropStore;
      });
      setPlayer1((prevPlayer1: PlayerType) => {
        let newPlayer1 = { ...player1, gold: player1.gold - card.goldCost };
        return newPlayer1;
      });
    } else {
      console.log("Don't have enough gold");
    }
  }

  return (
    <div className="grid grid-cols-10 gap-2.5 mb-5">
      <div className="col-span-full">
        <h2>Crop Store</h2>
      </div>
      {cropStore.map((cardData) => {
        return (
          <Card
            key={"cropStore-" + cardData.card.name}
            data={cardData}
            handleClick={() => handleCardClick(cardData.card)}
          ></Card>
        );
      }, [])}
    </div>
  );
}
