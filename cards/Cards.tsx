import {
  ActionType,
  CardTypeType,
  CropType,
  ResourceType,
  WarbondType,
} from "./CardTypes";

export type CardType = {
  name: string;
  goldCost: number;
  type: CardTypeType;
  goldGranted: number;
  image: string | null;
};

class Card {
  public name;
  public goldCost;
  public type;
  public goldGranted;
  public image;
  constructor(
    name: string,
    goldCost: number,
    type: CardTypeType,
    goldGranted: number,
    image: string | null
  ) {
    this.name = name;
    this.goldCost = goldCost;
    this.type = type;
    this.goldGranted = goldGranted;
    this.image = image;
  }
}

//  Crops
export const Sunflower: CardType = new Card("Sunflower", 0, CropType, 1, null);
export const Potato: CardType = new Card("Potato", 1, CropType, 2, null);
export const Pumpkin: CardType = new Card("Pumpkin", 2, CropType, 3, null);
export const Carrot: CardType = new Card("Carrot", 3, CropType, 4, null);
export const Cabbage: CardType = new Card("Cabbage", 4, CropType, 5, null);
export const Beetroot: CardType = new Card("Beetroot", 5, CropType, 6, null);
export const Cauliflower: CardType = new Card(
  "Cauliflower",
  6,
  CropType,
  7,
  null
);
export const Parsnip: CardType = new Card("Parsnip", 7, CropType, 8, null);
export const Wheat: CardType = new Card("Wheat", 8, CropType, 9, null);
export const Radish: CardType = new Card("Radish", 9, CropType, 10, null);

// Warbonds
export const Ticket: CardType = new Card("Ticket", 10, WarbondType, 0, null);
export const Tribute: CardType = new Card("Tribute", 0, WarbondType, 0, null);
export const Patron: CardType = new Card("Patron", 20, WarbondType, 0, null);
export const Treasury: CardType = new Card("Treasury", 0, WarbondType, 0, null);

// Action Cards
export const Fertilizer: CardType = new Card(
  "Fertilizer",
  1,
  ActionType,
  0,
  null
);
export const Firelighter: CardType = new Card(
  "Firelighter",
  1,
  ActionType,
  0,
  null
);
export const GoblinBalloon: CardType = new Card(
  "Goblin Balloon",
  3,
  ActionType,
  0,
  null
);
export const HumanBlacksmith: CardType = new Card(
  "Human Blacksmite",
  6,
  ActionType,
  0,
  null
);
export const GoblinBlacksmith: CardType = new Card(
  "Goblin Blacksmith",
  5,
  ActionType,
  0,
  null
);
export const GoblinCarry: CardType = new Card(
  "Goblin Carry",
  8,
  ActionType,
  0,
  null
);
export const GoblinFarmer: CardType = new Card(
  "Goblin Farmer",
  8,
  ActionType,
  0,
  null
);
export const HumanFarmer: CardType = new Card(
  "Human Farmer",
  5,
  ActionType,
  0,
  null
);
export const Mine: CardType = new Card("Mine", 3, ActionType, 0, null);
export const Resources: CardType = new Card(
  "Resources",
  5,
  ActionType,
  0,
  null
);
export const RustyShovel: CardType = new Card(
  "Rusty Shovel",
  3,
  ActionType,
  0,
  null
);
export const IronShovel: CardType = new Card(
  "Iron Shovel",
  8,
  ActionType,
  0,
  null
);
export const Shop: CardType = new Card("Shop", 6, ActionType, 0, null);
export const WishingWell: CardType = new Card(
  "Wishing Well",
  6,
  ActionType,
  0,
  null
);
export const TravelingSalesman: CardType = new Card(
  "Traveling Salesman",
  4,
  ActionType,
  0,
  null
);
export const Tailor: CardType = new Card("Tailor", 3, ActionType, 0, null);
export const HumanWarrior: CardType = new Card(
  "Human Warrior",
  10,
  ActionType,
  0,
  null
);
export const GoblinWarrior: CardType = new Card(
  "Goblin Warrior",
  9,
  ActionType,
  0,
  null
);
export const RadishPie: CardType = new Card(
  "Radish Pie",
  0,
  ActionType,
  0,
  null
);

// RESOURCES
export const Tree: CardType = new Card("Tree", 2, ResourceType, 0, null);
export const Stone: CardType = new Card("Stone", 4, ResourceType, 0, null);
export const Iron: CardType = new Card("Iron", 6, ResourceType, 0, null);
export const Gold: CardType = new Card("Gold", 10, ResourceType, 0, null);
