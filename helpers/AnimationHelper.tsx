import { Dispatch, SetStateAction } from "react";

export const moveTo = (
  e: any,
  id: string,
  setCoords: Dispatch<SetStateAction<any>>
) => {
  const cardCoords = e.target.getBoundingClientRect();
  const playAreaCoords = document.getElementById(id)?.getBoundingClientRect()!;
  setCoords({
    x: (cardCoords["x"] - playAreaCoords["x"]) * -1,
    y: (cardCoords["y"] - playAreaCoords["y"]) * -1,
  });
};
