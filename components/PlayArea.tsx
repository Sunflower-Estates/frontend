import { useContext } from "react";

import { PlayAreaContext } from "../context/PlayAreaContext";
import Card from "./Card";
import { PlayAreaCard } from "./PlayAreaCard";

export function PlayArea() {
  const playAreaContext = useContext(PlayAreaContext);
  if (!playAreaContext) return null;
  const { playArea, setPlayArea, setHarvestArea } = playAreaContext;

  return (
    <div className="bg-white" style={{ width: 750, height: 175 }}>
      {playArea.map((cardData) => {
        return (
          <PlayAreaCard
            key={`playArea-${cardData.card.name}`}
            data={cardData}
          />
        );
      })}
    </div>
  );
}
