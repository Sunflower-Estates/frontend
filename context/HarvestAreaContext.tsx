import { createContext } from "react";

import { CardDataType, PlayerType } from "../pages/demo";

interface HarvestAreaContextInterface {
  harvestArea: CardDataType[];
  setHarvestArea: Function;
  playArea: CardDataType[];
  setPlayArea: Function;
  player1: PlayerType;
  setPlayer1: Function;
}

export const HarvestAreaContext =
  createContext<HarvestAreaContextInterface | null>(null);
