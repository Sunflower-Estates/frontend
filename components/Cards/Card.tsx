import Image from "next/image";
import React, { useContext } from "react";
import { MouseEventHandler } from "react";

import { ModalContext } from "../../context/ModalContext";
import { CardDataType } from "../../pages/demo";
import CardModal from "../CardModal";

type CardProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
  highlighted: boolean;
};
export default function Card({
  data,
  handleClick,
  highlighted,
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
      className="cursor-pointer relative"
      style={{ width: 125, height: 175 }}
    >
      <div
        className="absolute top-0 right-0 bg-red-500 rounded-full text-center ml-auto "
        style={{ width: "25px", height: "25px" }}
      >
        {data.count == Infinity ? "∞" : data.count}
      </div>
      <Image
        src={`${data.card.cardImage}`}
        alt=""
        width={125}
        height={175}
        className={highlighted ? "shadow-xl shadow-red-600" : ""}
      />
    </div>
  );
}
