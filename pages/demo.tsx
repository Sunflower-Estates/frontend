import _ from "lodash";
import {
  createContext,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Beetroot,
  Cabbage,
  CardType,
  Carrot,
  Cauliflower,
  Fertilizer,
  GoblinBalloon,
  GoblinBlacksmith,
  GoblinCarry,
  GoblinFarmer,
  GoblinWarrior,
  HumanBlacksmith,
  HumanFarmer,
  HumanWarrior,
  IronShovel,
  Mine,
  Parsnip,
  Patron,
  Potato,
  Pumpkin,
  Radish,
  RadishPie,
  Resources,
  RustyShovel,
  Shop,
  Sunflower,
  Tailor,
  Ticket,
  TravelingSalesman,
  Treasury,
  Tribute,
  Wheat,
  WishingWell,
} from "../cards/Cards";
import ActionStoreCard from "../components/ActionStoreCard";
import Card from "../components/Card";
import CardModal from "../components/CardModal";
import { CropStore } from "../components/CropStore";
import { HarvestArea } from "../components/HarvestArea";
import { MainStore } from "../components/MainStore";
import Navbar from "../components/Navbar";
import { Player1Area } from "../components/Player1Area";
import Player1Card from "../components/Player1Card";
import Player2Card from "../components/Player2Card";
import { Player2Hand } from "../components/Player2Hand";
import WarbondStoreCard from "../components/WarbondStoreCard";
import { CropStoreContext } from "../context/CropStoreContext";
import { HarvestAreaContext } from "../context/HarvestAreaContext";
import { MainStoreContext } from "../context/MainStoreContext";
import { ModalContext } from "../context/ModalContext";
import { Player1AreaContext } from "../context/Player1AreaContext";

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

//  ENUMS

enum PhaseType {
  ACTION,
  BUY,
}

// FUNCTIONS
export const addCardToData = (
  card: CardType,
  array: CardDataType[]
): CardDataType[] => {
  // if the card data already exists
  if (array.find((cardData) => cardData.card == card)) {
    // update the array
    return array.map((cardData) => {
      // where target card data is found
      if (cardData.card == card) {
        // update the card data
        return { card: card, count: cardData.count + 1 };
      } else {
        return cardData;
      }
    });
  } else {
    return [...array, { card: card, count: 1 }];
  }
};

export const removeCardFromData = (
  card: CardType,
  array: CardDataType[]
): CardDataType[] => {
  // check if the card already exists in the array
  const arrayCardData = array.find((cardData) => cardData.card == card);
  const hasCard = !!arrayCardData;

  if (hasCard) {
    // make the new card data (update count)
    const newArrayCardData = {
      ...arrayCardData,
      count: arrayCardData.count - 1,
    };

    if (newArrayCardData.count <= 0) {
      // remove card from array
      return array.filter((cardData) => cardData.card != newArrayCardData.card);
    } else {
      // update the card data
      return array.map((cardData) => {
        // where card to update is found
        if (cardData.card == newArrayCardData.card) {
          // return the new card data
          return newArrayCardData;
        } else {
          return cardData;
        }
      });
    }
  } else {
    return array;
  }
};

export const getCardDataCount = (array: CardDataType[]): number => {
  // sum the counts from all card data
  return (array ?? []).reduce((a: number, b: CardDataType) => a + b.count, 0);
};

export default function Demo(): JSX.Element {
  //  STATE
  const [phase, setPhase] = useState<PhaseType>(PhaseType.ACTION);

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
  const [hasDrawn, setHasDrawn] = useState<boolean>();

  const [playArea, setPlayArea] = useState<CardDataType[]>([]);
  const [harvestArea, setHarvestArea] = useState<CardDataType[]>([]);

  const [player1Deck, setPlayer1Deck] = useState<CardDataType[]>([
    { card: Sunflower, count: 7 },
    { card: Ticket, count: 3 },
  ]);
  const [player2Deck, setPlayer2Deck] = useState<CardDataType[]>([
    ...new Array(10).fill(null),
  ]);

  const [player1Hand, setPlayer1Hand] = useState<CardDataType[]>([]);
  const [player2Hand, setPlayer2Hand] = useState<CardDataType[]>([
    ...new Array(5).fill(null),
  ]);

  const [cropStore, setCropStore] = useState<CardDataType[]>([
    { card: Sunflower, count: Infinity },
    { card: Potato, count: Infinity },
    { card: Pumpkin, count: Infinity },
    { card: Carrot, count: Infinity },
    { card: Cabbage, count: Infinity },
    { card: Beetroot, count: Infinity },
    { card: Cauliflower, count: Infinity },
    { card: Parsnip, count: Infinity },
    { card: Wheat, count: Infinity },
    { card: Radish, count: Infinity },
  ]);

  const [actionStore, setActionStore] = useState<CardDataType[]>([
    { card: Fertilizer, count: 10 },
    // { card: Firelighter, count: 10 },
    { card: GoblinBalloon, count: 10 },
    { card: HumanBlacksmith, count: 10 },
    { card: GoblinBlacksmith, count: 10 },
    { card: GoblinCarry, count: 10 },
    { card: GoblinFarmer, count: 10 },
    { card: HumanFarmer, count: 10 },
    { card: Mine, count: 10 },
    { card: Resources, count: 10 },
    { card: RustyShovel, count: 10 },
    { card: IronShovel, count: 10 },
    { card: Shop, count: 10 },
    { card: WishingWell, count: 10 },
    { card: TravelingSalesman, count: 10 },
    { card: Tailor, count: 10 },
    { card: HumanWarrior, count: 10 },
    { card: GoblinWarrior, count: 10 },
    { card: RadishPie, count: 10 },
  ]);

  const [warbondStore, setWarbondStore] = useState<CardDataType[]>([
    { card: Ticket, count: 8 },
    { card: Tribute, count: 8 },
    { card: Patron, count: 8 },
    { card: Treasury, count: 8 },
  ]);

  const [modalCard, setModalCard] = useState<CardType>(Sunflower);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // FUNCTIONS

  const player1Draw: Function = useCallback(
    (draws: number) => {
      if (!player1Deck || !player1Hand) return;
      // clone the deck and hand
      var _player1Deck: CardDataType[] = player1Deck!;
      var _player1Hand: CardDataType[] = player1Hand!;

      // loop for each draw
      for (let x = 0; x < draws; x++) {
        // draw a single card or return
        let drawnCard: CardDataType = _.sample(_player1Deck)!;
        if (!drawnCard) return;
        _player1Hand = addCardToData(drawnCard.card, _player1Hand);
        _player1Deck = removeCardFromData(drawnCard.card, _player1Deck);
      }

      //  update state
      setPlayer1Hand(_player1Hand);
      setPlayer1Deck(_player1Deck);
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
  }, [hasDrawn, player1Draw]);

  return (
    <>
      <ModalContext.Provider
        value={{
          modalVisible: modalVisible,
          setModalVisible: setModalVisible,
          modalCard: modalCard,
          setModalCard: setModalCard,
        }}
      >
        {modalVisible ? <CardModal card={modalCard} /> : null}

        <Navbar />
        <main className="flex-grow bg-red-50">
          <div className="container mx-auto">
            <CropStoreContext.Provider
              value={{
                cropStore: cropStore,
                setCropStore: setCropStore,
                playArea: playArea,
                setPlayArea: setPlayArea,
                player1: player1,
                setPlayer1: setPlayer1,
              }}
            >
              <CropStore />
            </CropStoreContext.Provider>
            <HarvestAreaContext.Provider
              value={{
                harvestArea: harvestArea,
                setHarvestArea: setHarvestArea,
                playArea: playArea,
                setPlayArea: setPlayArea,
                player1: player1,
                setPlayer1: setPlayer1,
              }}
            >
              <HarvestArea></HarvestArea>
            </HarvestAreaContext.Provider>
            <MainStoreContext.Provider
              value={{
                warbondStore: warbondStore,
                setWarbondStore: setWarbondStore,
                actionStore: actionStore,
                setActionStore: setActionStore,
                player1: player1,
                setPlayer1: setPlayer1,
                playArea: playArea,
                setPlayArea: setPlayArea,
              }}
            >
              <MainStore />
            </MainStoreContext.Provider>
            <PlayArea playArea={playArea} />
            <Player1AreaContext.Provider
              value={{
                player1: player1,
                setPlayer1: setPlayer1,
                player1Hand: player1Hand,
                setPlayer1Hand: setPlayer1Hand,
                player1Deck: player1Deck,
                setPlayer1Deck: setPlayer1Deck,
                setPlayArea: setPlayArea,
              }}
            >
              <Player1Area />
            </Player1AreaContext.Provider>
          </div>
        </main>
      </ModalContext.Provider>
    </>
  );
}

type PlayAreaPropsType = {
  playArea: CardDataType[];
};
function PlayArea({ playArea }: PlayAreaPropsType) {
  return (
    <div className="col-span-12 grid grid-cols-6">
      <div className="col-span-1"></div>
      <div className="col-span-4 bg-white border-2 shadow-inset-xl">
        <h2 className="col-span-full">Play Area</h2>
        <div className="grid grid-cols-5 gap-2.5 p-5">
          {(playArea ?? []).map((cardData) => {
            return (
              <Card
                key={`playArea-${cardData.card.name}`}
                data={cardData}
                handleClick={() => {}}
              />
            );
          })}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
