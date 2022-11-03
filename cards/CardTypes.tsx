export type CardTypeType = {
  name: string;
};

class CardType {
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

export const TreasureType: CardType = new CardType("Treasure");
export const ActionType: CardType = new CardType("Action");
export const VictoryType: CardType = new CardType("Victory");
export const CurseType: CardType = new CardType("Curse");
export const AttackType: CardType = new CardType("Attack");
