import { createContext } from "react";

import { CardDataType, PlayerType } from "../pages/demo";

interface MainStoreContextInterface {
  warbondStore: CardDataType[];
  setWarbondStore: Function;
  actionStore: CardDataType[];
  setActionStore: Function;
  player1: PlayerType;
  setPlayer1: Function;
  playArea: CardDataType[];
  setPlayArea: Function;
  setPlayer1Deck: Function;
}
export const MainStoreContext = createContext<MainStoreContextInterface | null>(
  null
);
