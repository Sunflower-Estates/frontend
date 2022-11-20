import Image from "next/image";
import React, { useContext, useMemo } from "react";
import { MouseEventHandler } from "react";

import { ModalContext } from "../../context/ModalContext";
import { PhaseContext } from "../../context/PhaseContext";
import { CardDataType, PhaseType } from "../../pages/demo";

type CardHarvestableProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
  isHarvestable: boolean;
};
export default function CardHarvestable({
  data,
  handleClick,
  isHarvestable,
}: CardHarvestableProps) {
  const { modalVisible, setModalVisible, modalCard, setModalCard } =
    useContext(ModalContext);

  const phaseContext = useContext(PhaseContext);
  if (!phaseContext) return null;
  const { phase, setPhase } = phaseContext;

  const isHarvestPhase = phase == PhaseType.HARVEST;

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
      style={{ minWidth: 125, minHeight: 175 }}
    >
      <div
        className="absolute bottom-0  bg-red-500 rounded-full text-center"
        style={{ width: 25, height: 25 }}
      >
        {data.count == Infinity ? "∞" : data.count}
      </div>
      <Image
        src={`${data.card.cardImage}`}
        alt=""
        width={125}
        height={175}
        className={`${isHarvestable ? "rotate-90" : ""} ${
          isHarvestPhase ? "shadow-red-500 shadow-xl" : ""
        }`}
      />
    </div>
  );
}
