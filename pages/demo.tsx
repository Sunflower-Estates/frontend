// Rainbowkit
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

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
} from "../card-data/Cards";
import { ActionType, CardTypeType, CropType } from "../card-data/CardTypes";
import { HarvestArea } from "../components/Areas/HarvestArea";
import { PlayArea } from "../components/Areas/PlayArea";
import { Player1Area } from "../components/Areas/Player1Area";
import CardModal from "../components/CardModal";
import Navbar from "../components/Navbar";
import { CropStore } from "../components/Stores/CropStore";
import { MainStore } from "../components/Stores/MainStore";
import { CropStoreContext } from "../context/CropStoreContext";
import { HarvestAreaContext } from "../context/HarvestAreaContext";
import { MainStoreContext } from "../context/MainStoreContext";
import { ModalContext } from "../context/ModalContext";
import { PhaseContext } from "../context/PhaseContext";
import { PlayAreaContext } from "../context/PlayAreaContext";
import { Player1AreaContext } from "../context/Player1AreaContext";
import VanillaTilt from "vanilla-tilt";
import {
  addCardToData,
  removeCardFromData,
  getCardDataCount,
  getCardDataCountOfType,
  addDataToData,
} from "../helpers/CardDataHelper";
import { PermanentArea } from "../components/Areas/PermanentArea";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// TYPES

export type PlayerType = {
  name: string;
  gold: number;
  actions: number;
  buys: number;
  victory: number;
};

export type CardDataType = {
  card: CardType;
  count: number;
};

//  ENUMS

export enum PhaseType {
  PREHARVEST, // 0. turn plants up right in plots
  HARVEST, // 1. plots can be harvested to play area
  ACTION, // 2. action cards played
  PLANT, // 3. plant cards from hand to crop plots
  BUY, // 4. buy and goes into discard pile
  PRECLEANUP, // 5. any effects at end of turn
  CLEANUP, // 6. all cards discards from play area and hand; then deal
}

// FUNCTIONS

export default function Demo(): JSX.Element {
  //  STATE
  const [phase, setPhase] = useState<PhaseType>(PhaseType.PREHARVEST);

  const [player1, setPlayer1] = useState<PlayerType>({
    name: "truemiller",
    gold: 0,
    actions: 0,
    victory: 0,
    buys: 0,
  });

  const [player2, setPlayer2] = useState<PlayerType>({
    name: "supersynapse",
    gold: 0,
    actions: 0,
    victory: 0,
    buys: 0,
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
        if (!drawnCard) break;
        _player1Hand = addCardToData(drawnCard.card, _player1Hand);
        _player1Deck = removeCardFromData(drawnCard.card, _player1Deck);
      }

      //  update state
      setPlayer1Hand(_player1Hand);
      setPlayer1Deck(_player1Deck);

      // animate
    },
    [player1Deck, player1Hand]
  );

  // EFFECTS

  useEffect(() => {
    // PREHARVEST
    if (phase == PhaseType.PREHARVEST) {
      if (!hasDrawn) {
        player1Draw(5);
        setHasDrawn(true);
      }
      setPhase(PhaseType.HARVEST);
    }
    //  HARVEST
    else if (phase == PhaseType.HARVEST) {
      if (getCardDataCount(harvestArea) > 0) {
        //
      } else {
        setPhase(PhaseType.ACTION);
      }
    }
    // ACTION
    else if (phase == PhaseType.ACTION) {
      if (getCardDataCountOfType(player1Hand, ActionType) > 0) {
        //
      } else {
        setPhase(PhaseType.PLANT);
      }
    }
    // PLANT
    else if (phase == PhaseType.PLANT) {
      if (getCardDataCountOfType(player1Hand, CropType) > 0) {
        //
      } else {
        setPhase(PhaseType.BUY);
      }
    }
    // BUY
    else if (phase == PhaseType.BUY) {
      if (player1.gold > 0) {
        //
      } else {
        setPhase(PhaseType.PRECLEANUP);
      }
    }
    // PRECLEANUP
    else if (phase == PhaseType.PRECLEANUP) {
      setPhase(PhaseType.CLEANUP);
    }
    // CLEANUP
    else if (phase == PhaseType.CLEANUP) {
      if (player1Hand.length > 0 || playArea.length > 0) {
        setPlayer1Deck((prevPlayer1Deck) => {
          let newPlayer1Deck: CardDataType[] = [];
          newPlayer1Deck = addDataToData(player1Hand, prevPlayer1Deck);
          newPlayer1Deck = addDataToData(newPlayer1Deck, playArea);
          return newPlayer1Deck;
        });
        setPlayer1Hand([]);
        setPlayArea([]);
      }
      setHasDrawn(false);
      setPhase(PhaseType.PREHARVEST);
    }
  }, [
    harvestArea,
    hasDrawn,
    phase,
    playArea,
    player1.gold,
    player1Deck,
    player1Draw,
    player1Hand,
  ]);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <PhaseContext.Provider value={{ phase: phase, setPhase: setPhase }}>
            <ModalContext.Provider
              value={{
                modalVisible: modalVisible,
                setModalVisible: setModalVisible,
                modalCard: modalCard,
                setModalCard: setModalCard,
              }}
            >
              {modalVisible ? <CardModal card={modalCard} /> : null}

              <Navbar showConnect={true} />
              <main className="flex-grow bg-red-50">
                <div className="flex flex-col container mx-auto">
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
                      setPlayer1Deck: setPlayer1Deck,
                    }}
                  >
                    <MainStore />
                  </MainStoreContext.Provider>
                  <div className="flex">
                    <div className="flex flex-col">
                      <PermanentArea></PermanentArea>
                    </div>
                    <div className="flex flex-col">
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
                      <PlayAreaContext.Provider
                        value={{
                          playArea: playArea,
                          setPlayArea: setPlayArea,
                          setHarvestArea: setHarvestArea,
                        }}
                      >
                        <PlayArea />
                      </PlayAreaContext.Provider>
                    </div>
                  </div>
                  <Player1AreaContext.Provider
                    value={{
                      player1: player1,
                      setPlayer1: setPlayer1,
                      player1Hand: player1Hand,
                      setPlayer1Hand: setPlayer1Hand,
                      player1Deck: player1Deck,
                      setPlayer1Deck: setPlayer1Deck,
                      setPlayArea: setPlayArea,
                      harvestArea: harvestArea,
                      setHarvestArea: setHarvestArea,
                    }}
                  >
                    <Player1Area />
                  </Player1AreaContext.Provider>
                </div>
              </main>
            </ModalContext.Provider>
            <div className="flex w-full justify-center">
              Phase: <span className="font-bold">{PhaseType[phase]}</span>
            </div>
            <div className="w-full flex justify-center">
              <button className="btn" onClick={() => setPhase(0)}>
                {PhaseType[0]}
              </button>
              <button className="btn" onClick={() => setPhase(1)}>
                {PhaseType[1]}
              </button>
              <button className="btn" onClick={() => setPhase(2)}>
                {PhaseType[2]}
              </button>
              <button className="btn" onClick={() => setPhase(3)}>
                {PhaseType[3]}
              </button>
              <button className="btn" onClick={() => setPhase(4)}>
                {PhaseType[4]}
              </button>
              <button className="btn" onClick={() => setPhase(5)}>
                {PhaseType[5]}
              </button>
              <button className="btn" onClick={() => setPhase(6)}>
                {PhaseType[6]}
              </button>
            </div>
          </PhaseContext.Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
