import gold from "src/assets/cards/gold/gold.png"

import {Card, CardType} from "../../types/Cards";
import {ActionType} from "../../types/CardTypes";

export const Laboratory: CardType = new Card("Laboratory", 5, ActionType, gold);
export const Market: CardType = new Card("Market", 5, ActionType, gold);
export const Harbinger: CardType = new Card("Harbinger", 3, ActionType, gold);
export const Merchant: CardType = new Card("Merchant", 3, ActionType, gold);
export const Vassal: CardType = new Card("Vassal", 3, ActionType, gold);
export const Village: CardType = new Card("Village", 3, ActionType, gold);
