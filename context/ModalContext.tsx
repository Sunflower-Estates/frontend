import { createContext } from "react";

import { CardType, Sunflower } from "../cards/Cards";

//  CONTEXT
export const ModalContext = createContext({
  modalVisible: false,
  setModalVisible: (visible: boolean): any => {},
  modalCard: Sunflower,
  setModalCard: (card: CardType): any => {},
});
