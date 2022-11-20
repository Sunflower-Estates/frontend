import Image from "next/image";
import { useContext, useEffect } from "react";

import { CardType } from "../card-data/Cards";
import { ModalContext } from "../context/ModalContext";

import VanillaTilt from "vanilla-tilt";

type CardModalPropsType = {
  card: CardType | null;
};
export default function CardModal({ card }: CardModalPropsType): JSX.Element {
  const { modalVisible, setModalVisible } = useContext(ModalContext);

  const handleModalClose = (e: any) => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const card = document.querySelector("#dialog-card");
    if (card) {
      new VanillaTilt(card, {
        max: 50,
        "max-glare": 10,
        speed: 100,
        perspective: 700,
      });
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur z-10"></div>

      <div
        className="fixed inset-0 z-10 overflow-y-auto "
        onClick={handleModalClose}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            id="dialog-card"
            className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all "
          >
            <img
              src={card!.cardImage!}
              alt={card!.name!}
              width={350}
              height={700}
              className="card"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
