import { MouseEvent, MouseEventHandler } from "react";

import { CardDataType } from "../../pages/demo";
import Card from "./Card";
export type SideStoreCardPropsType = {
  data: CardDataType;
  setSideStore: Function;
};
export default function SideStoreCard({
  data,
  setSideStore,
}: SideStoreCardPropsType): JSX.Element {
  const handleClick: MouseEventHandler = (e: MouseEvent<HTMLElement>) => {
    setSideStore((prevSideStore: CardDataType[]) => {
      return prevSideStore
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0);
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
