import Card from "./Card";
type StoreCardPropsType = {
  data: any;
  setStore: any;
};
export default function StoreCard({
  data,
  setStore,
}: StoreCardPropsType): JSX.Element {
  const handleClick = (e: Event) => {
    setStore((prevStore: any[]) => {
      return prevStore
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
