import {Card, CardType} from "../../types/Cards";
import {TreasureType} from "../../types/CardTypes";

export const Copper: CardType = new Card(
    "Copper",
    0,
    TreasureType,
    null
);

export const Silver: CardType = new Card(
    "Silver",
    3,
    TreasureType,
    null
);

export const Gold: CardType = new Card(
    "Gold",
    6,
    TreasureType,
    null
);
