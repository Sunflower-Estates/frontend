import Image from "next/image";
import React, { useContext } from "react";
import { MouseEventHandler } from "react";

import { ModalContext } from "../context/ModalContext";
import { CardDataType } from "../pages/demo";
import CardModal from "./CardModal";

type CardProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
};
export default function CardIcon({
  data,
  handleClick,
}: CardProps): JSX.Element {
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
      className="cursor-pointer"
      style={{ minWidth: 100, minHeight: 100 }}
    >
      <div className="absolute" style={{ minWidth: 100, minHeight: 100 }}>
        <div
          className="absolute left-0 bottom-0 bg-yellow-500 rounded-full text-center"
          style={{ width: "25px", height: "25px" }}
        >
          {data.card.goldCost}
        </div>
        <div
          className="absolute right-0 bottom-0 bg-red-500 rounded-full text-center"
          style={{ width: "25px", height: "25px" }}
        >
          {data.count == Infinity ? "∞" : data.count}
        </div>
      </div>
      <Image src={`${data.card.iconImage}`} alt="" width={100} height={100} />
    </div>
  );
}
