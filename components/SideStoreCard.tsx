import Card from "./Card";
export type SideStoreCardPropsType = {
  data: any;
  setSideStore: any;
};
export default function SideStoreCard({
  data,
  setSideStore,
}: SideStoreCardPropsType): JSX.Element {
  const handleClick = (e: Event) => {
    setSideStore((prevSideStore: any[]) => {
      return prevSideStore
        .map((element) => {
          if (element == data) {
            const newCount = Math.max(element.count - 1, 0);
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
