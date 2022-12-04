import { animate, motion } from "framer-motion";
import {
  createElement,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useRef,
  useState,
} from "react";

import { ActionType, CropType } from "../../card-data/CardTypes";
import { PhaseContext } from "../../context/PhaseContext";
import { Player1AreaContext } from "../../context/Player1AreaContext";
import {
  addCardToData,
  getCardDataCount,
  removeCardFromData,
} from "../../helpers/CardDataHelper";
import { CardDataType, PhaseType, PlayerType } from "../../pages/demo";
import { PlayArea } from "../Areas/PlayArea";
import Card from "../Cards/Card";

type Player1CardPropsType = {
  data: CardDataType;
};

export default function Player1Card({ data }: Player1CardPropsType) {
  const player1AreaContext = useContext(Player1AreaContext);
  const phaseContext = useContext(PhaseContext);
  if (!player1AreaContext || !phaseContext) return null;
  const {
    setPlayer1Hand,
    setPlayArea,
    setPlayer1,
    harvestArea,
    setHarvestArea,
  } = player1AreaContext;
  const { phase, setPhase } = phaseContext;

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const motionRef = useRef(null);

  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    if (phase == PhaseType.ACTION) {
      if (data.card.type == ActionType) {
        setPlayer1Hand((prevPlayer1Hand: CardDataType[]) => {
          const newPlayer1Hand = removeCardFromData(data.card, prevPlayer1Hand);
          return newPlayer1Hand;
        });
        setPlayArea((prevPlayArea: CardDataType[]) => {
          const newPlayArea = addCardToData(data.card, prevPlayArea);
          return newPlayArea;
        });
        setPlayer1((prevPlayer1: PlayerType) => {
          const newPlayer1 = {
            ...prevPlayer1,
            gold: prevPlayer1.gold + data.card.goldGranted,
            action: prevPlayer1.actions - 1 + data.card.actionsGranted,
            buys: prevPlayer1.buys + data.card.buysGranted,
          };
          return newPlayer1;
        });
        moveTo(e, "playArea");
      }
    } else if (phase == PhaseType.PLANT) {
      if (data.card.type == CropType) {
        // PLANT TO CROP AREA
        if (getCardDataCount(harvestArea) < 4) {
          // remove from player hand
          setPlayer1Hand((prevPlayer1Hand: CardDataType[]) => {
            const newPlayer1Hand = removeCardFromData(
              data.card,
              prevPlayer1Hand
            );
            return newPlayer1Hand;
          });
          // add to crop area
          setHarvestArea((prevHarvestArea: CardDataType[]) => {
            const newHarvestArea = addCardToData(data.card, prevHarvestArea);
            return newHarvestArea;
          });
          moveTo(e, "harvestArea");
        }
      }
    }
  };
  return (
    <>
      <motion.div
        ref={motionRef}
        className="bg-red-600"
        style={{ width: 100, height: 100 }}
        animate={coords}
      >
        <Card
          data={data}
          handleClick={handleClick}
          highlighted={phase == PhaseType.PLANT && data.card.type == CropType}
        />
      </motion.div>
    </>
  );
}
