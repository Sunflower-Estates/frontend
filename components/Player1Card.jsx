import Card from './Card'
export default function Player1Card({ data, setPlayer1Hand }) {
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
