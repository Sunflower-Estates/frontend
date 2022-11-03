import _ from "lodash";
import { useEffect, useState } from "react";

import {
  Bandit,
  CardType,
  Copper,
  Curse,
  Duchy,
  Estate,
  Gardens,
  Gold,
  Harbinger,
  Laboratory,
  Market,
  Merchant,
  Militia,
  Province,
  Silver,
  Vassal,
  Village,
  Witch,
} from "../src/cards/Cards";
import Navbar from "../src/components/Navbar";
import Player1Card from "../src/components/Player1Card";
import Player2Card from "../src/components/Player2Card";
import SideStoreCard from "../src/components/SideStoreCard";
import StoreCard from "../src/components/StoreCard";

// TYPES

export type PlayerType = {
  name: string;
  gold: number;
  actions: number;
  victory: number;
};

export type CardDataType = {
  card: CardType;
  count: number;
};

export default function Demo(): JSX.Element {
  //  STATE
  const [player1, setPlayer1] = useState<PlayerType>({
    name: "truemiller",
    gold: 3,
    actions: 3,
    victory: 3,
  });

  const [player2, setPlayer2] = useState<PlayerType>({
    name: "supersynapse",
    gold: 3,
    actions: 3,
    victory: 3,
  });

  const [player1Deck, setPlayer1Deck] = useState<CardDataType[]>([
    { card: Copper, count: 7 },
    { card: Estate, count: 3 },
  ]);
  const [player2Deck, setPlayer2Deck] = useState<CardDataType[]>([
    ...new Array(10).fill(null),
  ]);

  const [player1Hand, setPlayer1Hand] = useState<CardDataType[]>([
    { card: Copper, count: 3 },
    { card: Estate, count: 2 },
  ]);
  const [player2Hand, setPlayer2Hand] = useState<CardDataType[]>([
    ...new Array(6).fill(null),
  ]);

  const [store, setStore] = useState<CardDataType[]>([
    { card: Militia, count: 10 },
    { card: Bandit, count: 10 },
    { card: Laboratory, count: 10 },
    { card: Market, count: 10 },
    { card: Witch, count: 10 },
    { card: Harbinger, count: 10 },
    { card: Merchant, count: 10 },
    { card: Vassal, count: 10 },
    { card: Village, count: 10 },
    { card: Gardens, count: 10 },
  ]);

  const [sideStore, setSideStore] = useState<CardDataType[]>([
    { card: Province, count: 8 },
    { card: Gold, count: 30 },
    { card: Duchy, count: 8 },
    { card: Silver, count: 40 },
    { card: Estate, count: 8 },
    { card: Copper, count: 50 },
    { card: Curse, count: 8 },
  ]);

  // FUNCTIONS
  function shuffle(setState: any) {
    setState((state: any) => _.shuffle(state));
  }

  // EFFECTS
  useEffect(() => {
    console.log("Store changed");
  }, [store]);

  useEffect(() => {
    console.log("Side store changed");
  }, [sideStore]);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-red-50">
        <div className="grid grid-cols-12 mb-5">
          <div></div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-full">
              <h2>
                Player 2: {player2.name} - {player2.gold} gold -{" "}
                {player2.actions} actions - {player2.victory} VP
              </h2>
            </div>
            {player2Hand.map((data: CardDataType, index: number) => {
              return <Player2Card key={"player2Hand-" + index} />;
            })}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-12 bg-red-50 gap-5 mb-5">
          <div className="grid grid-cols-2 bg-red-100">
            {sideStore.map((data: CardDataType) => (
              <SideStoreCard
                key={"sideStore-" + data.card.name}
                data={data}
                setSideStore={setSideStore}
              />
            ))}
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-5 bg-red-100 ">
              {store.map((data: CardDataType) => {
                return (
                  <StoreCard
                    key={"store-" + data.card.name}
                    data={data}
                    setStore={setStore}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div></div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-full">
              <h2>
                Player 1: {player1.name} - {player1.gold} gold -{" "}
                {player1.actions} actions - {player1.victory} VP
              </h2>
            </div>
            {player1Hand.map((data: CardDataType) => {
              return (
                <Player1Card
                  key={"player1Hand-" + data.card.name}
                  data={data}
                  setPlayer1Hand={setPlayer1Hand}
                />
              );
            })}
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
