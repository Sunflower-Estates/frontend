import Image from "next/image";
import React, { createRef, useContext, useEffect, useRef } from "react";
import { MouseEventHandler } from "react";
import VanillaTilt from "vanilla-tilt";

import { ModalContext } from "../../context/ModalContext";
import { CardDataType } from "../../pages/demo";

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
      <img
        src={`${data.card.cardImage}`}
        alt=""
        width={125}
        height={175}
        className={highlighted ? "shadow-xl shadow-red-600" : ""}
      />
    </div>
  );
}
