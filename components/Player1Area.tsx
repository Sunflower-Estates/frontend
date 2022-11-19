import { useContext } from "react";

import { Player1AreaContext } from "../context/Player1AreaContext";
import { CardDataType, getCardDataCount, PlayerType } from "../pages/demo";
import Player1Card from "./Player1Card";
import { Player1Hand } from "./Player1Hand";

export function Player1Area() {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { player1, player1Hand, setPlayer1Hand, setPlayArea, player1Deck } =
    player1AreaContext;
  return (
    <div className="flex" style={{ minHeight: "230px" }}>
      <div className="bg-white border" style={{ width: 125 }}>
        <img src="" alt="" />
      </div>
      <div className="bg-white border" style={{ width: 125 }}></div>
      <div className=" bg-white border">
        <Player1Hand />
      </div>
      <div className="bg-white border" style={{ width: 125 }}>
        <h2>Deck</h2>
        <pre>{getCardDataCount(player1Deck)}</pre>
      </div>
    </div>
  );
}
