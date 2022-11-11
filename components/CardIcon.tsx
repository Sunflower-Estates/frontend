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
    <div onClick={handleClick} onContextMenu={handleRightClick} className="">
      <Image src={`${data.card.iconImage}`} alt="" width={350} height={350} />
      <div className="flex">
        <div
          className="top-0 bg-yellow-500 rounded-full text-center mr-auto "
          style={{ width: "25px", height: "25px" }}
        >
          {data.card.goldCost}
        </div>
        <div
          className="top-0 bg-red-500 rounded-full text-center ml-auto "
          style={{ width: "25px", height: "25px" }}
        >
          {data.count == Infinity ? "∞" : data.count}
        </div>
      </div>
    </div>
  );
}
