import {
  ActionType,
  AttackType,
  CardTypeType,
  CurseType,
  TreasureType,
  VictoryType,
} from "../types/CardTypes";

export type CardType = {
  name: string;
  cost: number;
  type: CardTypeType;
  image: string | null;
};

export class Card {
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
