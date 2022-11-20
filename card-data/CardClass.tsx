export type CardClassType = {
  name: string;
};

export class CardClass {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export const BeaverClass: CardClassType = new CardClass("Beaver");
export const MoleClass: CardClassType = new CardClass("Mole");
export const GoblinClass: CardClassType = new CardClass("Goblin");
export const HumanClass: CardClassType = new CardClass("Human");
export const MineClass: CardClassType = new CardClass("Mine");
export const ScarecrowClass: CardClassType = new CardClass("Scarecrow");
export const PlotClass: CardClassType = new CardClass("Plot");
export const FrogClass: CardClassType = new CardClass("Frog");
