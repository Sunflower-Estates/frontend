import { useContext } from "react";

import { HarvestAreaContext } from "../../context/HarvestAreaContext";
import { HarvestCard } from "../CardWrappers/HarvestCard";

export function HarvestArea() {
  const harvestAreaContext = useContext(HarvestAreaContext);
  if (!harvestAreaContext) return null;
  const { harvestArea } = harvestAreaContext;
  return (
    <div
      id="harvestArea"
      className="bg-white border flex"
      style={{ width: 500, height: 175 }}
    >
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
