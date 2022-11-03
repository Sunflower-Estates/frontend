import Card from './Card'

export default function SideStoreCard({ data, setSideStore }) {
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
