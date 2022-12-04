import { motion, MotionConfig } from "framer-motion";
import { useContext, useState } from "react";

import { HarvestAreaContext } from "../../context/HarvestAreaContext";
import { moveTo } from "../../helpers/AnimationHelper";
import {
  removeCardFromData,
  addCardToData,
} from "../../helpers/CardDataHelper";
import { CardDataType, PlayerType } from "../../pages/demo";
import CardHarvestable from "../Cards/CardHarvestable";

type HarvestCardPropsType = {
  data: CardDataType;
  isHarvestable: boolean;
};
export function HarvestCard({ data, isHarvestable }: HarvestCardPropsType) {
  const harvestAreaContext = useContext(HarvestAreaContext);
  if (!harvestAreaContext) return null;
  const { setHarvestArea, setPlayArea, setPlayer1 } = harvestAreaContext;

  const [coords, setCoords] = useState({ x: 0, y: 0 });

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
    moveTo(e, "playArea", setCoords);
  }

  return (
    <motion.div animate={coords}>
      <CardHarvestable
        handleClick={handleClick}
        data={data}
        isHarvestable={false}
      />
    </motion.div>
  );
}
