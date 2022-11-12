import { CardClassType, GoblinClass } from "./CardClass";
import {
  ActionType,
  CardTypeType,
  CropType,
  ResourceType,
  WarbondType,
} from "./CardTypes";

export type CardType = {
  victoryValue: number;
  name: string;
  goldCost: number;
  type: CardTypeType;
  cardClass: CardClassType | null;
  actionsGranted: number;
  cardsGranted: number;
  buysGranted: number;
  goldGranted: number;
  cardImage: string | null;
  iconImage: string | null;
  halfCardImage: string | null;
};

class Card {
  public name: string;
  public goldCost: number;
  public victoryValue: number;
  public type: CardTypeType;
  public cardClass: CardClassType | null;
  public actionsGranted: number;
  public cardsGranted: number;
  public buysGranted: number;
  public goldGranted: number;
  public cardImage: string | null;
  public iconImage: string | null;
  public halfCardImage: string | null;

  constructor(
    name: string,
    goldCost: number,
    victoryValue: number,
    type: CardTypeType,
    cardClass: CardClassType | null,
    actionsGranted: number,
    cardsGranted: number,
    buysGranted: number,
    goldGranted: number,
    cardImage: string | null,
    iconImage: string | null,
    cardhalfCardImageImage: string | null
  ) {
    this.name = name;
    this.goldCost = goldCost;
    this.victoryValue = victoryValue;
    this.type = type;
    this.cardClass = cardClass;
    this.actionsGranted = actionsGranted;
    this.cardsGranted = cardsGranted;
    this.buysGranted = buysGranted;
    this.goldGranted = goldGranted;
    this.cardImage = cardImage;
    this.iconImage = iconImage;
    this.halfCardImage = cardhalfCardImageImage;
  }
}

export const Sunflower: CardType = new Card(
  "Sunflower",
  0,
  0,
  CropType,
  null,
  1,
  0,
  0,
  0,
  "/img/cards/Crop_Sunflower.png",
  "/img/icons/Store_Mini_Sunflower.png",
  "/img/half-cards/Store_Mini_Sunflower.png"
);
export const Potato: CardType = new Card(
  "Potato",
  1,
  0,
  CropType,
  null,
  2,
  0,
  0,
  0,
  "/img/cards/Crop_Potato.png",
  "/img/icons/Store_Mini_Potato.png",
  "/img/half-cards/Store_Mini_Potato.png"
);
export const Pumpkin: CardType = new Card(
  "Pumpkin",
  2,
  0,
  CropType,
  null,
  3,
  0,
  0,
  0,
  "/img/cards/Crop_Pumpkin.png",
  "/img/icons/Store_Mini_Pumpkin.png",
  "/img/half-cards/Store_Mini_Pumpkin.png"
);
export const Carrot: CardType = new Card(
  "Carrot",
  4,
  0,
  CropType,
  null,
  4,
  0,
  0,
  0,
  "/img/cards/Crop_Carrot.png",
  "/img/icons/Store_Mini_Carrot.png",
  "/img/half-cards/Store_Mini_Carrot.png"
);
export const Cabbage: CardType = new Card(
  "Cabbage",
  6,
  0,
  CropType,
  null,
  5,
  0,
  0,
  0,
  "/img/cards/Crop_Cabbage.png",
  "/img/icons/Store_Mini_Cabbage.png",
  "/img/half-cards/Store_Mini_Cabbage.png"
);
export const Beetroot: CardType = new Card(
  "Beetroot",
  8,
  0,
  CropType,
  null,
  6,
  0,
  0,
  0,
  "/img/cards/Crop_Beetroot.png",
  "/img/icons/Store_Mini_Beetroot.png",
  "/img/half-cards/Store_Mini_Beetroot.png"
);
export const Cauliflower: CardType = new Card(
  "Cauliflower",
  10,
  0,
  CropType,
  null,
  7,
  0,
  0,
  0,
  "/img/cards/Crop_Cauliflower.png",
  "/img/icons/Store_Mini_Cauliflower.png",
  "/img/half-cards/Store_Mini_Cauliflower.png"
);
export const Parsnip: CardType = new Card(
  "Parsnip",
  12,
  0,
  CropType,
  null,
  8,
  0,
  0,
  0,
  "/img/cards/Crop_Parsnip.png",
  "/img/icons/Store_Mini_Parsnip.png",
  "/img/half-cards/Store_Mini_Parsnip.png"
);
export const Wheat: CardType = new Card(
  "Wheat",
  14,
  0,
  CropType,
  null,
  9,
  0,
  0,
  0,
  "/img/cards/Crop_Wheat.png",
  "/img/icons/Store_Mini_Wheat.png",
  "/img/half-cards/Store_Mini_Wheat.png"
);
export const Radish: CardType = new Card(
  "Radish",
  14,
  0,
  CropType,
  null,
  10,
  0,
  0,
  0,
  "/img/cards/Crop_Radish.png",
  "/img/icons/Store_Mini_Radish.png",
  "/img/half-cards/Store_Mini_Radish.png"
);
/////////////////////////////////////////////////////////////////////////////
// Warbonds
export const Ticket: CardType = new Card(
  "Ticket",
  10,
  0,
  WarbondType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Warbond_Ticket.png",
  null,
  "/img/half-cards/Store_Mini_Ticket.png"
);
export const Tribute: CardType = new Card(
  "Tribute",
  0,
  0,
  WarbondType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Warbond_Tribute.png",
  null,
  "/img/half-cards/Store_Mini_Tribute.png"
);
export const Patron: CardType = new Card(
  "Patron",
  20,
  0,
  WarbondType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Warbond_Patron.png",
  null,
  "/img/half-cards/Store_Mini_Patron.png"
);
export const Treasury: CardType = new Card(
  "Treasury",
  0,
  0,
  WarbondType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Warbond_Treasury.png",
  null,
  "/img/half-cards/Store_Mini_Treasury.png"
);

// Action Cards
export const Fertilizer: CardType = new Card(
  "Fertilizer",
  2,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Fertilizer.png",
  null,
  "/img/half-cards/Store_Mini_Fertilizer.png"
);

export const GoblinBalloon: CardType = new Card(
  "Goblin Balloon",
  3,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Goblin_Balloon.png",
  null,
  "/img/half-cards/Store_Mini_Goblin_Balloon.png"
);
export const HumanBlacksmith: CardType = new Card(
  "Human Blacksmith",
  6,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Human_Blacksmith.png",
  null,
  "/img/half-cards/Store_Mini_Human_Blacksmith.png"
);
export const GoblinBlacksmith: CardType = new Card(
  "Goblin Blacksmith",
  5,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Goblin_Blacksmith.png",
  null,
  "/img/half-cards/Store_Mini_Goblin_Blacksmith.png"
);
export const GoblinCarry: CardType = new Card(
  "Goblin Carry",
  8,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Goblin_Carry.png",
  null,
  "/img/half-cards/Store_Mini_Goblin_Carry.png"
);
export const GoblinFarmer: CardType = new Card(
  "Goblin Farmer",
  8,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Goblin_Farmer.png",
  null,
  "/img/half-cards/Store_Mini_Goblin_Farmer.png"
);
export const HumanFarmer: CardType = new Card(
  "Human Farmer",
  5,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Human_Farmer.png",
  null,
  "/img/half-cards/Store_Mini_Human_Farmer.png"
);
export const Mine: CardType = new Card(
  "Mine",
  6,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Mine.png",
  null,
  "/img/half-cards/Store_Mini_Mine.png"
);
export const Resources: CardType = new Card(
  "Resources",
  6,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Resources.png",
  null,
  "/img/half-cards/Store_Mini_Resources.png"
);
export const RustyShovel: CardType = new Card(
  "Rusty Shovel",
  3,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Rusty_Shovel.png",
  null,
  "/img/half-cards/Store_Mini_Rusty_Shovel.png"
);
export const IronShovel: CardType = new Card(
  "Iron Shovel",
  8,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Iron_Shovel.png",
  null,
  "/img/half-cards/Store_Mini_Iron_Shovel.png"
);
export const Shop: CardType = new Card(
  "Shop",
  6,
  0,
  ActionType,
  null,
  1,
  0,
  2,
  2,
  "/img/cards/Base_Set_Shop.png",
  null,
  "/img/half-cards/Store_Mini_Shop.png"
);
export const WishingWell: CardType = new Card(
  "Wishing Well",
  6,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Wishing_Well.png",
  null,
  "/img/half-cards/Store_Mini_Wishing_Well.png"
);
export const TravelingSalesman: CardType = new Card(
  "Traveling Salesman",
  4,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Traveling_Salesman.png",
  null,
  "/img/half-cards/Store_Mini_Traveling_Salesman.png"
);
export const Tailor: CardType = new Card(
  "Tailor",
  8,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Tailor.png",
  null,
  "/img/half-cards/Store_Mini_Tailor.png"
);
export const HumanWarrior: CardType = new Card(
  "Human Warrior",
  10,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Human_Warrior.png",
  null,
  "/img/half-cards/Store_Mini_Human_Warrior.png"
);
export const GoblinWarrior: CardType = new Card(
  "Goblin Warrior",
  10,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Goblin_Warrior.png",
  null,
  "/img/half-cards/Store_Mini_Goblin_Warrior.png"
);
export const RadishPie: CardType = new Card(
  "Radish Pie",
  0,
  0,
  ActionType,
  null,
  0,
  0,
  0,
  0,
  "/img/cards/Base_Set_Radish_Pie.png",
  null,
  "/img/half-cards/Store_Mini_Radish_Pie.png"
);

// RESOURCES
export const Tree: CardType = new Card(
  "Tree",
  2,
  0,
  ResourceType,
  null,
  0,
  0,
  0,
  0,
  null,
  null,
  null
);
export const Stone: CardType = new Card(
  "Stone",
  4,
  0,
  ResourceType,
  null,
  0,
  0,
  0,
  0,
  null,
  null,
  null
);
export const Iron: CardType = new Card(
  "Iron",
  6,
  0,
  ResourceType,
  null,
  0,
  0,
  0,
  0,
  null,
  null,
  null
);
export const Gold: CardType = new Card(
  "Gold",
  10,
  0,
  ResourceType,
  null,
  0,
  0,
  0,
  0,
  null,
  null,
  null
);
