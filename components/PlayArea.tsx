import { useContext } from "react";

import { PlayAreaContext } from "../context/PlayAreaContext";
import Card from "./Card";
import { PlayAreaCard } from "./PlayAreaCard";

export function PlayArea() {
  const playAreaContext = useContext(PlayAreaContext);
  if (!playAreaContext) return null;
  const { playArea, setPlayArea, setHarvestArea } = playAreaContext;

  return (
    <div className="col-span-12 grid grid-cols-6">
      <div className="col-span-1"></div>
      <div className="col-span-4 bg-white border-2 shadow-inset-xl">
        <h2 className="col-span-full">Play Area</h2>
        <div className="grid grid-cols-5 gap-2.5 p-5">
          {playArea.map((cardData) => {
            return (
              <PlayAreaCard
                key={`playArea-${cardData.card.name}`}
                data={cardData}
              />
            );
          })}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}