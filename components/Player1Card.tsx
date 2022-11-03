import Card from "./Card";
import { MouseEventHandler, MouseEvent } from "react";
import { CardDataType } from "../pages/demo";

export type Player1CardPropsType = {
  data: any;
  setPlayer1Hand: Function;
};
export default function Player1Card({
  data,
  setPlayer1Hand,
}: Player1CardPropsType): JSX.Element {
  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    setPlayer1Hand((prevState: CardDataType[]) => {
      return prevState
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0);
            if (newCount <= 0) return null;
            return { card: data.card, count: newCount };
          } else {
            return element;
          }
        })
        .filter((x) => x);
    });
  };
  return <Card data={data} handleClick={handleClick} />;
}
