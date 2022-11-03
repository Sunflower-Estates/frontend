import gold from "src/assets/cards/gold/gold.png"

import {Card, CardType} from "../../types/Cards";
import {TreasureType} from "../../types/CardTypes";

export const Copper: CardType = new Card(
    "Copper",
    0,
    TreasureType,
    gold
);

export const Silver: CardType = new Card(
    "Silver",
    3,
    TreasureType,
    gold
);

export const Gold: CardType = new Card(
    "Gold",
    6,
    TreasureType,
    gold
);
