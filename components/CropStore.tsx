import { CardDataType } from "../pages/demo";
import Card from "./Card";

export type CropStorePropsType = {
  cropStore: CardDataType[];
  setCropStore: Function;
};
export function CropStore({ cropStore, setCropStore }: CropStorePropsType) {
  return (
    <div className="grid grid-cols-10 gap-2.5 mb-5">
      <div className="col-span-full">
        <h2>Crop Store</h2>
      </div>
      {cropStore.map((cardData) => {
        return (
          <Card
            key={"cropStore-" + cardData.card.name}
            data={cardData}
            handleClick={() => {}}
          >
            a
          </Card>
        );
      }, [])}
    </div>
  );
}
