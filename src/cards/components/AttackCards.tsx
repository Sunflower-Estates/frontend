import gold from "src/assets/cards/gold/gold.png"

import {Card, CardType} from "../../types/Cards";
import {AttackType} from "../../types/CardTypes";

export const Militia: CardType = new Card("Militia", 0, AttackType, gold);
export const Bandit: CardType = new Card("Bandit", 0, AttackType, gold);
export const Witch: CardType = new Card("Witch", 0, AttackType, gold);
