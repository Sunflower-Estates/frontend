import { useContext } from "react";

import { Player1AreaContext } from "../context/Player1AreaContext";
import { CardDataType, getCardDataCount, PlayerType } from "../pages/demo";
import Player1Card from "./Player1Card";

export function Player1Area() {
  const player1AreaContext = useContext(Player1AreaContext);
  if (!player1AreaContext) return null;
  const { player1, player1Hand, setPlayer1Hand, setPlayArea, player1Deck } =
    player1AreaContext;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      <div className="bg-white border">Resources</div>
      <div className="bg-white border">Discard</div>
      <div className="col-span-6 grid grid-cols-6 bg-white border">
        <div className="col-span-full">
          <h2>
            Player 1: {player1.name} - {player1.gold} gold - {player1.actions}{" "}
            actions - {player1.victory} VP
          </h2>
        </div>
        <Player1Hand />
      </div>
      <div className="bg-white border">
        <h2>Deck</h2>
        <pre>{getCardDataCount(player1Deck)}</pre>
      </div>
    </div>
  );
}

function Player1Hand() {
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
