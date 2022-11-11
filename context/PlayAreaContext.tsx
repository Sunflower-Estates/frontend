import { createContext } from "react";

import { CardDataType } from "../pages/demo";
interface PlayAreaContextInterface {
  playArea: CardDataType[];
  setPlayArea: Function;
  setHarvestArea: Function;
}
export const PlayAreaContext = createContext<PlayAreaContextInterface | null>(
  null
);
