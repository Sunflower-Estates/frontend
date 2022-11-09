import { createContext } from "react";

import { CardDataType, PlayerType } from "../pages/demo";

interface Player1AreaContextInterface {
  player1: PlayerType;
  setPlayer1: Function;
  player1Hand: CardDataType[];
  setPlayer1Hand: Function;
  player1Deck: CardDataType[];
  setPlayer1Deck: Function;
  setPlayArea: Function;
}

export const Player1AreaContext =
  createContext<Player1AreaContextInterface | null>(null);
