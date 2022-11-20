import { CardType } from "../card-data/Cards";
import { CardTypeType } from "../card-data/CardTypes";
import { CardDataType } from "../pages/demo";

// ADDS A CARD TO A DATA SET
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

// REMOVES A CARD FROM A DATASET
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

// ADD A DATASET TO A DATASET
export const addDataToData = (
  array1: CardDataType[],
  array2: CardDataType[]
) => {
  let _a1 = array1;
  let _a2 = array2;

  _a1.forEach((el1) => {
    for (let x = 0; x < el1.count; x++) {
      _a2 = addCardToData(el1.card, _a2);
    }
  });

  return _a2;
};

//  COUNT CARDS IN A DATASET
export const getCardDataCount = (array: CardDataType[]): number => {
  // sum the counts from all card data
  return (array ?? []).reduce((a: number, b: CardDataType) => a + b.count, 0);
};

// COUNT CARDS OF A GIVEN DATA TYPE IN A DATASET
export const getCardDataCountOfType = (
  array: CardDataType[],
  cardType: CardTypeType
): number => {
  return (array ?? []).reduce((a: number, b: CardDataType) => {
    if (b.card.type == cardType) {
      return a + b.count;
    } else {
      return a;
    }
  }, 0);
};
