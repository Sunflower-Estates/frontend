import { MouseEvent, MouseEventHandler } from "react";

import { CardDataType } from "../pages/demo";
import Card from "./Card";

export type Player1CardPropsType = {
  data: CardDataType;
  setPlayer1Hand: Function;
  setPlayArea: Function;
};
export default function Player1Card({
  data,
  setPlayer1Hand,
  setPlayArea,
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

    setPlayArea((prevState: CardDataType[]) => {
      return [...prevState, data];
    });
  };
  return <Card data={data} handleClick={handleClick} />;
}
