import { createContext } from "react";

import { Sunflower } from "../card-data/Cards";
import { CardDataType, PlayerType } from "../pages/demo";

interface CropStoreContextInterface {
  cropStore: CardDataType[];
  setCropStore: Function;
  playArea: CardDataType[];
  setPlayArea: Function;
  player1: PlayerType;
  setPlayer1: Function;
}

export const CropStoreContext = createContext<CropStoreContextInterface | null>(
  null
);
