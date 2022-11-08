import { MouseEventHandler, useContext } from "react";

import { CardType } from "../cards/Cards";
import { CropStoreContext } from "../context/CropStoreContext";
import { addCardToData, CardDataType } from "../pages/demo";
import Card from "./Card";

export function CropStore() {
  const { cropStore, setCropStore, setPlayArea } = useContext(CropStoreContext);

  function handleCardClick(card: CardType) {
    //@ts-ignore
    setPlayArea((prevArea: CardDataType[]) => {
      let newPlayArea = addCardToData(card, prevArea);
      return newPlayArea;
    });
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
