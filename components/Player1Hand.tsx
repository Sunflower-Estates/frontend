import { useContext } from "react";

import { Player1AreaContext } from "../context/Player1AreaContext";
import { CardDataType } from "../pages/demo";
import Player1Card from "./Player1Card";

export function Player1Hand() {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { player1Hand, setPlayer1Hand, setPlayArea } = player1AreaContext;
  return (
    <>
      {(player1Hand ?? [])?.map((data: CardDataType) => {
        return (
          <Player1Card key={"player1Hand-" + data.card.name} data={data} />
        );
      })}
    </>
  );
}
