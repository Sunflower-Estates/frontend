import { CardDataType, PlayerType } from "../../pages/demo";
import Player2Card from "../CardWrappers/Player2Card";

export type Player2HandPropsType = {
  player2: PlayerType;
  player2Hand: CardDataType[];
};
export function Player2Hand({ player2, player2Hand }: Player2HandPropsType) {
  return (
    <div className="grid grid-cols-10 mb-5 gap-2.5">
      <div className="col-span-full">
        <h2>
          Player 2: {player2.name} - {player2.gold} gold - {player2.actions}{" "}
          actions - {player2.victory} VP
        </h2>
      </div>
      {player2Hand.map((data: CardDataType, index: number) => {
        return <Player2Card key={"player2Hand-" + index} />;
      })}
    </div>
  );
}
