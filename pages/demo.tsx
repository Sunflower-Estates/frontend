import _ from "lodash";
import { useCallback, useEffect, useState } from "react";

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
} from "../cards/Cards";
import Navbar from "../components/Navbar";
import Player1Card from "../components/Player1Card";
import Player2Card from "../components/Player2Card";
import SideStoreCard from "../components/SideStoreCard";
import StoreCard from "../components/StoreCard";

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

  const [turnPlayer, setTurnPlayer] = useState<PlayerType>(player1);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);

  const [player1Deck, setPlayer1Deck] = useState<CardDataType[]>([
    { card: Copper, count: 7 },
    { card: Estate, count: 3 },
  ]);
  const [player2Deck, setPlayer2Deck] = useState<CardDataType[]>([
    ...new Array(10).fill(null),
  ]);

  const [player1Hand, setPlayer1Hand] = useState<CardDataType[]>([]);
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

  const player1Draw: Function = useCallback(
    (draws: number) => {
      // clone the deck and hand
      var _player1Deck: CardDataType[] = player1Deck;
      var _player1Hand: CardDataType[] = player1Hand;

      // loop for each draw
      for (let x = 0; x < draws; x++) {
        // draw a single card or return
        let drawnCard = _.sample(_player1Deck);
        if (drawnCard) drawnCard.count = 1;
        else return;
        console.log("Drew");

        // remove from the deck
        const cardDataInDeck: CardDataType | undefined = _player1Deck.find(
          (cardData) => cardData.card == drawnCard?.card
        );

        // add to the hand
        const handHasCard: boolean = !!_player1Hand.find(
          (cardData) => drawnCard?.card == cardData.card
        );

        if (handHasCard) {
          // update the card count in the players hand
          _player1Hand = _player1Hand.map((cardData) => {
            if (cardData.card == drawnCard?.card) {
              return {
                card: cardData.card,
                count: cardData.count + drawnCard.count,
              };
            } else {
              return cardData;
            }
          });
        } else {
          // extend the players hand with the drawn card
          _player1Hand.push(drawnCard);
        }

        // remove from the deck
        // _player1Deck = _player1Deck
        //   .map((cardData) => {
        //     if (cardData.card == drawnCard?.card) {
        //       if (cardData.count >= 1) {
        //         return { ...cardData, count: cardData.count - 1 };
        //       } else {
        //         return null;
        //       }
        //     } else {
        //       return cardData;
        //     }
        //   })
        //   .filter((x) => x);
      }

      //  update state
      setPlayer1Deck(_player1Deck);
      setPlayer1Hand(_player1Hand);
    },
    [player1Deck, player1Hand]
  );

  // EFFECTS
  useEffect(() => {
    //  draw card on load
    if (!hasDrawn) {
      player1Draw(5);
      setHasDrawn(true);
    }
    return () => {};
  }, [hasDrawn, player1Draw]);

  useEffect(() => {}, [store]);

  useEffect(() => {}, [sideStore]);

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
            {(player1Hand ?? [])?.map((data: CardDataType) => {
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
      <button className="btn" onClick={() => player1Draw(1)}>
        Draw
      </button>
    </>
  );
}
