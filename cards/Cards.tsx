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
export const Sunflower: CardType = new Card(
  "Sunflower",
  0,
  CropType,
  1,
  "/img/cards/Crop_Sunflower.png"
);
export const Potato: CardType = new Card(
  "Potato",
  1,
  CropType,
  2,
  "/img/cards/Crop_Potato.png"
);
export const Pumpkin: CardType = new Card(
  "Pumpkin",
  2,
  CropType,
  3,
  "/img/cards/Crop_Pumpkin.png"
);
export const Carrot: CardType = new Card(
  "Carrot",
  3,
  CropType,
  4,
  "/img/cards/Crop_Carrot.png"
);
export const Cabbage: CardType = new Card(
  "Cabbage",
  4,
  CropType,
  5,
  "/img/cards/Crop_Cabbage.png"
);
export const Beetroot: CardType = new Card(
  "Beetroot",
  5,
  CropType,
  6,
  "/img/cards/Crop_Beetroot.png"
);
export const Cauliflower: CardType = new Card(
  "Cauliflower",
  6,
  CropType,
  7,

  "/img/cards/Crop_Cauliflower.png"
);
export const Parsnip: CardType = new Card(
  "Parsnip",
  7,
  CropType,
  8,
  "/img/cards/Crop_Parsnip.png"
);
export const Wheat: CardType = new Card(
  "Wheat",
  8,
  CropType,
  9,
  "/img/cards/Crop_Wheat.png"
);
export const Radish: CardType = new Card(
  "Radish",
  9,
  CropType,
  10,
  "/img/cards/Crop_Radish.png"
);

// Warbonds
export const Ticket: CardType = new Card(
  "Ticket",
  10,
  WarbondType,
  0,
  "/img/cards/Warbond_Ticket.png"
);
export const Tribute: CardType = new Card(
  "Tribute",
  0,
  WarbondType,
  0,
  "/img/cards/Warbond_Tribute.png"
);
export const Patron: CardType = new Card(
  "Patron",
  20,
  WarbondType,
  0,
  "/img/cards/Warbond_Patron.png"
);
export const Treasury: CardType = new Card(
  "Treasury",
  0,
  WarbondType,
  0,
  "/img/cards/Warbond_Treasury.png"
);

// Action Cards
export const Fertilizer: CardType = new Card(
  "Fertilizer",
  1,
  ActionType,
  0,
  "/img/cards/Base_Set_Fertilizer.png"
);
// export const Firelighter: CardType = new Card(
//   "Firelighter",
//   1,
//   ActionType,
//   0,
//   "/img/cards/Base_Set_Firelighter.png"
// );
export const GoblinBalloon: CardType = new Card(
  "Goblin Balloon",
  3,
  ActionType,
  0,
  "/img/cards/Base_Set_Goblin_Balloon.png"
);
export const HumanBlacksmith: CardType = new Card(
  "Human Blacksmith",
  6,
  ActionType,
  0,
  "/img/cards/Base_Set_Human_Blacksmith.png"
);
export const GoblinBlacksmith: CardType = new Card(
  "Goblin Blacksmith",
  5,
  ActionType,
  0,
  "/img/cards/Base_Set_Goblin_Blacksmith.png"
);
export const GoblinCarry: CardType = new Card(
  "Goblin Carry",
  8,
  ActionType,
  0,
  "/img/cards/Base_Set_Goblin_Carry.png"
);
export const GoblinFarmer: CardType = new Card(
  "Goblin Farmer",
  8,
  ActionType,
  0,
  "/img/cards/Base_Set_Goblin_Farmer.png"
);
export const HumanFarmer: CardType = new Card(
  "Human Farmer",
  5,
  ActionType,
  0,
  "/img/cards/Base_Set_Human_Farmer.png"
);
export const Mine: CardType = new Card(
  "Mine",
  3,
  ActionType,
  0,
  "/img/cards/Base_Set_Mine.png"
);
export const Resources: CardType = new Card(
  "Resources",
  5,
  ActionType,
  0,
  "/img/cards/Base_Set_Resources.png"
);
export const RustyShovel: CardType = new Card(
  "Rusty Shovel",
  3,
  ActionType,
  0,
  "/img/cards/Base_Set_Rusty_Shovel.png"
);
export const IronShovel: CardType = new Card(
  "Iron Shovel",
  8,
  ActionType,
  0,
  "/img/cards/Base_Set_Iron_Shovel.png"
);
export const Shop: CardType = new Card(
  "Shop",
  6,
  ActionType,
  0,
  "/img/cards/Base_Set_Shop.png"
);
export const WishingWell: CardType = new Card(
  "Wishing Well",
  6,
  ActionType,
  0,
  "/img/cards/Base_Set_Wishing_Well.png"
);
export const TravelingSalesman: CardType = new Card(
  "Traveling Salesman",
  4,
  ActionType,
  0,
  "/img/cards/Base_Set_Traveling_Salesman.png"
);
export const Tailor: CardType = new Card(
  "Tailor",
  3,
  ActionType,
  0,
  "/img/cards/Base_Set_Tailor.png"
);
export const HumanWarrior: CardType = new Card(
  "Human Warrior",
  10,
  ActionType,
  0,
  "/img/cards/Base_Set_Human_Warrior.png"
);
export const GoblinWarrior: CardType = new Card(
  "Goblin Warrior",
  9,
  ActionType,
  0,
  "/img/cards/Base_Set_Goblin_Warrior.png"
);
export const RadishPie: CardType = new Card(
  "Radish Pie",
  0,
  ActionType,
  0,
  "/img/cards/Base_Set_Radish_Pie.png"
);

// RESOURCES
export const Tree: CardType = new Card("Tree", 2, ResourceType, 0, null);
export const Stone: CardType = new Card("Stone", 4, ResourceType, 0, null);
export const Iron: CardType = new Card("Iron", 6, ResourceType, 0, null);
export const Gold: CardType = new Card("Gold", 10, ResourceType, 0, null);
