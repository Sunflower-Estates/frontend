import { wrap } from "module";
import { useContext } from "react";

import { MainStoreContext } from "../../context/MainStoreContext";
import { CardDataType } from "../../pages/demo";
import ActionStoreCard from "../CardWrappers/ActionStoreCard";
import WarbondStoreCard from "../CardWrappers/WarbondStoreCard";

export function MainStore() {
  return (
    <div className="flex">
      <WarbondStore />
      <ActionStore />
    </div>
  );
}

function WarbondStore() {
  const warbondStoreContext = useContext(MainStoreContext);
  if (!warbondStoreContext) return null;
  const { warbondStore } = warbondStoreContext;
  return (
    <div style={{ width: 250, height: 200, display: "flex", flexWrap: "wrap" }}>
      {warbondStore.map((data: CardDataType) => (
        <WarbondStoreCard key={"sideStore-" + data.card.name} data={data} />
      ))}
    </div>
  );
}

function ActionStore() {
  const mainStoreContext = useContext(MainStoreContext);
  if (!mainStoreContext) return null;
  const { actionStore } = mainStoreContext;
  return (
    <div className={"flex"} style={{ flexWrap: "wrap", width: 1286 }}>
      {actionStore.map((data: CardDataType) => (
        <ActionStoreCard key={"store-" + data.card.name} data={data} />
      ))}
    </div>
  );
}
