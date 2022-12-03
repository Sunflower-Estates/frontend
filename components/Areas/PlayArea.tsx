import { useContext } from "react";

import { PlayAreaContext } from "../../context/PlayAreaContext";
import { PlayAreaCard } from "../CardWrappers/PlayAreaCard";

export function PlayArea() {
  const playAreaContext = useContext(PlayAreaContext);
  if (!playAreaContext) return null;
  const { playArea } = playAreaContext;

  return (
    <div id="playArea" className="bg-white" style={{ width: 750, height: 175 }}>
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
