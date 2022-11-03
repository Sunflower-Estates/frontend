import {
  TreasureType,
  VictoryType,
  CurseType,
  AttackType,
  ActionType,
  CardTypeType,
} from "./CardTypes";

export type CardType = {
  name: string;
  cost: number;
  type: CardTypeType;
  image: string | null;
};

class Card {
  public name;
  public cost;
  public type;
  public image;
  constructor(
    name: string,
    cost: number,
    type: CardTypeType,
    image: string | null
  ) {
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.image = image;
  }
}

export const Copper: CardType = new Card("Copper", 0, TreasureType, null);
export const Silver: CardType = new Card("Silver", 3, TreasureType, null);
export const Gold: CardType = new Card("Gold", 6, TreasureType, null);

export const Province: CardType = new Card("Province", 8, VictoryType, null);
export const Duchy: CardType = new Card("Duchy", 5, VictoryType, null);
export const Estate: CardType = new Card("Estate", 2, VictoryType, null);
export const Gardens: CardType = new Card("Gardens", 2, VictoryType, null);

export const Curse: CardType = new Card("Curse", 0, CurseType, null);

export const Militia: CardType = new Card("Militia", 0, AttackType, null);
export const Bandit: CardType = new Card("Bandit", 0, AttackType, null);
export const Witch: CardType = new Card("Witch", 0, AttackType, null);

export const Laboratory: CardType = new Card("Laboratory", 5, ActionType, null);
export const Market: CardType = new Card("Market", 5, ActionType, null);
export const Harbinger: CardType = new Card("Harbinger", 3, ActionType, null);
export const Merchant: CardType = new Card("Merchant", 3, ActionType, null);
export const Vassal: CardType = new Card("Vassal", 3, ActionType, null);
export const Village: CardType = new Card("Village", 3, ActionType, null);
