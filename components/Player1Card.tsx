import Card from "./Card";
export type Player1CardPropsType = {
  data: any;
  setPlayer1Hand: any;
};
export default function Player1Card({
  data,
  setPlayer1Hand,
}: Player1CardPropsType): JSX.Element {
  const handleClick = (e: Event) => {
    setPlayer1Hand((prevState: any[]) => {
      return prevState
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0);
            if (newCount <= 0) return null;
            return { card: data.card, count: newCount };
          } else {
            return element;
          }
        })
        .filter((x) => x);
    });
  };
  return <Card data={data} handleClick={handleClick} />;
}
