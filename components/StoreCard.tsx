import { MouseEvent, MouseEventHandler } from "react";

import { CardDataType } from "../pages/demo";
import Card from "./Card";
type StoreCardPropsType = {
  data: CardDataType;
  setStore: Function;
};
export default function StoreCard({
  data,
  setStore,
}: StoreCardPropsType): JSX.Element {
  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    setStore((prevStore: CardDataType[]) => {
      return prevStore
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
