import React, { useContext } from "react";
import { MouseEventHandler } from "react";

import { CardDataType, ModalContext } from "../pages/demo";
import CardModal from "./CardModal";

type CardProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
};
export default function Card({ data, handleClick }: CardProps): JSX.Element {
  const { modalVisible, setModalVisible, modalCard, setModalCard } =
    useContext(ModalContext);

  function handleRightClick(e: any) {
    e.preventDefault();
    setModalCard(data.card);
    setModalVisible(true);
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleRightClick}
      style={{ aspectRatio: 3 / 4 }}
      className="bg-red-200 hover:bg-red-300 card grid grid-cols-2"
    >
      <div>{data.card.name}</div>
      <div>
        <div
          className="ml-auto bg-yellow-500 rounded-full text-center"
          style={{ width: "25px", height: "25px" }}
        >
          {data.card.goldCost}
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div
          className="bg-red-500 rounded-full text-center mt-auto flex width"
          style={{ width: "25px", height: "25px" }}
        >
          {data.count}
        </div>
      </div>
      <div></div>
    </div>
  );
}
