import {
  TreasureType,
  VictoryType,
  CurseType,
  AttackType,
  ActionType,
} from './CardTypes'

class Card {
  constructor(name, cost, type, image = '') {
    this.name = name
    this.cost = cost
    this.type = type
    this.image = image
  }
}

export const Copper = new Card('Copper', 0, TreasureType)
export const Silver = new Card('Silver', 3, TreasureType)
export const Gold = new Card('Gold', 6, TreasureType)

export const Province = new Card('Province', 8, VictoryType)
export const Duchy = new Card('Duchy', 5, VictoryType)
export const Estate = new Card('Estate', 2, VictoryType)
export const Gardens = new Card('Gardens', 2, VictoryType)

export const Curse = new Card('Curse', 0, CurseType)

export const Militia = new Card('Militia', 0, AttackType)
export const Bandit = new Card('Bandit', 0, AttackType)
export const Witch = new Card('Witch', 0, AttackType)

export const Laboratory = new Card('Laboratory', 5, ActionType)
export const Market = new Card('Market', 5, ActionType)
export const Harbinger = new Card('Harbinger', 3, ActionType)
export const Merchant = new Card('Merchant', 3, ActionType)
export const Vassal = new Card('Vassal', 3, ActionType)
export const Village = new Card('Village', 3, ActionType)
