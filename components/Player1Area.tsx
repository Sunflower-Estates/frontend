import { CardDataType, getCardDataCount, PlayerType } from "../pages/demo";
import Player1Card from "./Player1Card";

export type Player1AreaPropsType = {
  player1: PlayerType;
  player1Hand: CardDataType[];
  setPlayer1Hand: Function;
  player1Deck: CardDataType[];
  setPlayArea: Function;
};
export function Player1Area({
  player1,
  player1Hand,
  setPlayer1Hand,
  player1Deck,
  setPlayArea,
}: Player1AreaPropsType) {
  return (
    <div className="grid grid-cols-12">
      <div>Resources</div>
      <div>Discard</div>
      <div className="col-span-6 grid grid-cols-6">
        <div className="col-span-full">
          <h2>
            Player 1: {player1.name} - {player1.gold} gold - {player1.actions}{" "}
            actions - {player1.victory} VP
          </h2>
        </div>
        <Player1Hand
          player1Hand={player1Hand}
          setPlayer1Hand={setPlayer1Hand}
          setPlayArea={setPlayArea}
        />
      </div>
      <div>
        <h2>Deck</h2>
        <pre>{getCardDataCount(player1Deck)}</pre>
      </div>
    </div>
  );
}

type Player1HandPropsType = {
  player1Hand: CardDataType[];
  setPlayer1Hand: Function;
  setPlayArea: Function;
};
function Player1Hand({
  player1Hand,
  setPlayer1Hand,
  setPlayArea,
}: Player1HandPropsType) {
  return (
    <>
      {(player1Hand ?? [])?.map((data: CardDataType) => {
        return (
          <Player1Card
            key={"player1Hand-" + data.card.name}
            data={data}
            setPlayer1Hand={setPlayer1Hand}
            setPlayArea={setPlayArea}
          />
        );
      })}
    </>
  );
}
