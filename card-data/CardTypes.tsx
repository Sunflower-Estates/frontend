export type CardTypeType = {
  name: string;
};

class CardType {
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

export const CropType: CardType = new CardType("Crop");
export const ActionType: CardType = new CardType("Action");
export const WarbondType: CardType = new CardType("Warbond");
export const ResourceType: CardType = new CardType("Resource");
