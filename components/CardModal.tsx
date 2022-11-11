import Image from "next/image";
import { useContext } from "react";

import { CardType } from "../cards/Cards";
import { ModalContext } from "../context/ModalContext";

type CardModalPropsType = {
  card: CardType | null;
};
export default function CardModal({ card }: CardModalPropsType): JSX.Element {
  const { modalVisible, setModalVisible, modalCard, setModalCard } =
    useContext(ModalContext);

  const handleModalClose = (e: any) => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur "></div>

      <div
        className="fixed inset-0 z-10 overflow-y-auto "
        onClick={handleModalClose}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all">
            <img
              src={card!.cardImage!}
              alt={card!.name!}
              width={350}
              height={700}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
