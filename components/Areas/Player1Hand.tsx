import { useContext } from "react";

import { Player1AreaContext } from "../../context/Player1AreaContext";
import { CardDataType } from "../../pages/demo";
import Player1Card from "../CardWrappers/Player1Card";

export function Player1Hand() {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { player1Hand } = player1AreaContext;
  return (
    <div className="flex" style={{ width: 1000 }}>
      {(player1Hand ?? [])?.map((data: CardDataType) => {
        return (
          <Player1Card key={"player1Hand-" + data.card.name} data={data} />
        );
      })}
    </div>
  );
}
