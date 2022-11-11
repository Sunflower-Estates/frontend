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
export default function CardHalf({ data, handleClick }: CardProps) {
  const modalContext = useContext(ModalContext);
  if (!modalContext) return null;
  const { modalVisible, setModalVisible, modalCard, setModalCard } =
    modalContext;

  function handleRightClick(e: any) {
    e.preventDefault();
    setModalCard(data.card);
    setModalVisible(true);
  }

  return (
    <div onClick={handleClick} onContextMenu={handleRightClick} className="">
      <img src={`${data.card.halfCardImage}`} alt="" width={350} height={350} />
      <div
        className="top-0 bg-red-500 rounded-full text-center ml-auto "
        style={{ width: "25px", height: "25px" }}
      >
        {data.count == Infinity ? "∞" : data.count}
      </div>
      {/* <div>{data.card.name}</div>
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
      <div></div> */}
    </div>
  );
}
