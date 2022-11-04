import { CardDataType } from "../pages/demo";
import SideStoreCard from "./SideStoreCard";
import ActionStoreCard from "./ActionStoreCard";

export type MainStorePropsType = {
  warbondStore: CardDataType[];
  setWarbondStore: Function;
  actionStore: CardDataType[];
  setActionStore: Function;
};
export function MainStore({
  warbondStore,
  setWarbondStore,
  actionStore,
  setActionStore,
}: MainStorePropsType) {
  return (
    <div className="grid grid-cols-10 bg-red-50 gap-5 mb-5">
      <div className="col-span-8">
        <div className="grid grid-cols-10 bg-red-100 gap-2.5">
          <WarbondStore
            warbondStore={warbondStore}
            setWarbondStore={setWarbondStore}
          />
          <ActionStore
            actionStore={actionStore}
            setActionStore={setActionStore}
          />
        </div>
      </div>
    </div>
  );
}

type WarbondStorePropsType = {
  warbondStore: CardDataType[];
  setWarbondStore: Function;
};
function WarbondStore({
  warbondStore,
  setWarbondStore,
}: WarbondStorePropsType): JSX.Element {
  return (
    <div className="col-span-2 grid grid-cols-2 bg-red-100 gap-2.5">
      <h2 className="col-span-full">Warbond Store</h2>
      {warbondStore.map((data: CardDataType) => (
        <SideStoreCard
          key={"sideStore-" + data.card.name}
          data={data}
          setSideStore={setWarbondStore}
        />
      ))}
    </div>
  );
}

type ActionStorePropsType = {
  actionStore: CardDataType[];
  setActionStore: Function;
};
function ActionStore({ actionStore, setActionStore }: ActionStorePropsType) {
  return (
    <div className="col-span-8 grid grid-cols-10 gap-2.5">
      <h2 className="col-span-full">Action Store</h2>
      {actionStore.map((data: CardDataType) => {
        return (
          <ActionStoreCard
            key={"store-" + data.card.name}
            data={data}
            setStore={setActionStore}
          />
        );
      })}
    </div>
  );
}
