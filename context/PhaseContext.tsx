import { createContext } from "react";

import { PhaseType } from "../pages/demo";

interface PhaseContextInterface {
  phase: PhaseType;
  setPhase: Function;
}
export const PhaseContext = createContext<PhaseContextInterface | null>(null);
