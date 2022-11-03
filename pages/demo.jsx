import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
const sideStore = []

import {
  Gold,
  Silver,
  Copper,
  Province,
  Duchy,
  Estate,
  Gardens,
  Militia,
  Laboratory,
  Bandit,
  Market,
  Witch,
  Harbinger,
  Merchant,
  Vassal,
  Village,
  Curse,
} from '../cards/Cards'

export default function Demo() {
  const [player1, setPlayer1] = useState({
    name: 'truemiller',
    gold: 3,
    actions: 3,
    victory: 3,
  })
  const [player2, setPlayer2] = useState({
    name: 'supersynapse',
    gold: 3,
    actions: 3,
    victory: 3,
  })

  const [player1Deck, setPlayer1Deck] = useState([
    { card: Copper, count: 7 },
    { card: Estate, count: 3 },
  ])
  const [player2Deck, setPlayer2Deck] = useState([...new Array(10).fill(0)])

  const [player1Hand, setPlayer1Hand] = useState([
    { card: Copper, count: 3 },
    { card: Estate, count: 2 },
  ])
  const [player2Hand, setPlayer2Hand] = useState([...new Array(6).fill(0)])

  const [store, setStore] = useState([
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
  ])

  const [sideStore, setSideStore] = useState([
    { card: Province, count: 8 },
    { card: Gold, count: 30 },
    { card: Duchy, count: 8 },
    { card: Silver, count: 40 },
    { card: Estate, count: 8 },
    { card: Copper, count: 50 },
    { card: Curse, count: 8 },
  ])

  useEffect(() => {
    console.log('Store changed')
  }, [store])

  useEffect(() => {
    console.log('Side store changed')
  }, [sideStore])

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-red-50">
        <div className="grid grid-cols-12 mb-5">
          <div></div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-full">
              <h2>
                Player 2: {player2.name} - {player2.gold} gold -{' '}
                {player2.actions} actions - {player2.victory} VP
              </h2>
            </div>
            {player2Hand.map((data, index) => {
              return <Player2Card key={'player2Hand-' + index} />
            })}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-12 bg-red-50 gap-5 mb-5">
          <div className="grid grid-cols-2 bg-red-100">
            {sideStore.map((data) => (
              <SideStoreCard
                key={'sideStore-' + data.card.name}
                data={data}
                setSideStore={setSideStore}
              />
            ))}
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-5 bg-red-100 ">
              {store.map((data) => {
                return (
                  <StoreCard
                    key={'store-' + data.card.name}
                    data={data}
                    setStore={setStore}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div></div>
          <div className="col-span-6 grid grid-cols-6">
            <div className="col-span-full">
              <h2>
                Player 1: {player1.name} - {player1.gold} gold -{' '}
                {player1.actions} actions - {player1.victory} VP
              </h2>
            </div>
            {player1Hand.map((data) => {
              return (
                <Player1Card
                  key={'player1Hand-' + data.card.name}
                  data={data}
                  setPlayer1Hand={setPlayer1Hand}
                />
              )
            })}
          </div>
          <div></div>
        </div>
      </main>
    </>
  )
}

function StoreCard({ data, setStore }) {
  const handleClick = (e) => {
    setStore((prevStore) => {
      return prevStore
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0)
            if (newCount <= 0) return null
            return { card: data.card, count: newCount }
          } else {
            return element
          }
        })
        .filter((x) => x)
    })
  }
  return <Card data={data} handleClick={handleClick} />
}

function SideStoreCard({ data, setSideStore }) {
  const handleClick = (e) => {
    setSideStore((prevSideStore) => {
      return prevSideStore
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0)
            return { card: data.card, count: newCount }
          } else {
            return element
          }
        })
        .filter((x) => x)
    })
  }
  return <Card data={data} handleClick={handleClick} />
}

function Player1Card({ data, setPlayer1Hand }) {
  const handleClick = (e) => {
    setPlayer1Hand((prevState) => {
      return prevState
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0)
            if (newCount <= 0) return null
            return { card: data.card, count: newCount }
          } else {
            return element
          }
        })
        .filter((x) => x)
    })
  }
  return <Card data={data} handleClick={handleClick} />
}

function Player2Card() {
  return (
    <div style={{ aspectRatio: 1 / 1 }} className="bg-red-200 card">
      X
    </div>
  )
}

function Card({ data, handleClick }) {
  return (
    <div
      onClick={handleClick}
      style={{ aspectRatio: 1 / 1 }}
      className="bg-red-200 card grid grid-cols-2"
    >
      <div>{data.card.name}</div>
      <div>
        <div
          className="ml-auto bg-yellow-500 rounded-full text-center"
          style={{ width: '25px', height: '25px' }}
        >
          {data.card.cost}
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div
          className="bg-red-500 rounded-full text-center mt-auto"
          style={{ width: '25px', height: '25px' }}
        >
          {data.count}
        </div>
      </div>
      <div></div>
    </div>
  )
}
