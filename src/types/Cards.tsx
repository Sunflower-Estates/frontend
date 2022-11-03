import {
  CardTypeType,
} from "./CardTypes";

export type CardType = {
  name: string;
  cost: number;
  type: CardTypeType;
  image: any;
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
    image: any
  ) {
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.image = image;
  }
}
