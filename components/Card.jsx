export default function Card({ data, handleClick }) {
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