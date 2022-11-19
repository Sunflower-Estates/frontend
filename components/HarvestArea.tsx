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
    <div className="bg-white border" style={{ width: 500, height: 175 }}>
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
  );
}
