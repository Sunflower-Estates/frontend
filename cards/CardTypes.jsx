class CardType {
  constructor(name) {
    this.name = name
  }
}

export const TreasureType = new CardType('Treasure')
export const ActionType = new CardType('Action')
export const VictoryType = new CardType('Victory')
export const CurseType = new CardType('Curse')
export const AttackType = new CardType('Attack')
