import { useContext } from "react";

import { Player1AreaContext } from "../../context/Player1AreaContext";
import { getCardDataCount } from "../../helpers/CardDataHelper";
import { Player1Hand } from "./Player1Hand";

export function Player1Area() {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { player1Deck } = player1AreaContext;
  return (
    <div className="flex" style={{ minHeight: "230px" }}>
      <div
        className=" border"
        style={{
          width: 125,
          background: "url('/img/holders/Holder_Trash.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className=" border"
        style={{
          width: 125,
          background: "url('/img/holders/Holder_Discard_Pile.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
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
