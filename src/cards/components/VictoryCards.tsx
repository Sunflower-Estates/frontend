import gold from "src/assets/cards/gold/gold.png";

import {Card, CardType} from "../../types/Cards";
import {VictoryType} from "../../types/CardTypes";

export const Province: CardType = new Card("Province", 8, VictoryType, gold);
export const Duchy: CardType = new Card("Duchy", 5, VictoryType, gold);
export const Estate: CardType = new Card("Estate", 2, VictoryType, gold);
export const Gardens: CardType = new Card("Gardens", 2, VictoryType, gold);
