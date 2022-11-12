import { useContext } from "react";

import { HarvestAreaContext } from "../context/HarvestAreaContext";
import { CardDataType } from "../pages/demo";
import Card from "./Card";
import { HarvestCard } from "./HarvestCard";

export function HarvestArea() {
  const harvestAreaContext = useContext(HarvestAreaContext);
  if (!harvestAreaContext) return null;
  const { harvestArea } = harvestAreaContext;
  return (
    <>
      <div
        className="col-span-4 grid grid-cols-4 bg-white border"
        style={{ minHeight: "230px" }}
      >
        <h2 className="col-span-12">Harvest Area</h2>
        {harvestArea.map((data) => {
          return (
            <HarvestCard
              key={`harvestCard-` + data.card.name}
              data={data}
              isHarvestable={false}
            />
          );
        })}
      </div>
    </>
  );
}
