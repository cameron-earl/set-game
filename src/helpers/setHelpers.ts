import { Attribute, CardIndexSet, CardInfo, CardInfoSet } from './models';

export const isSet = (cards: CardInfoSet): boolean => {
  // console.log('isSet', cards);
  return Object.keys(Attribute).every(attr => attributeInSet(cards, attr as Attribute));
};

const attributeInSet = (cards: CardInfoSet, attribute: Attribute): boolean => {
  const vals = cards.map(c => c[Attribute[attribute]]);
  const allSame = vals[0] === vals[1] && vals[0] === vals[2];
  const allDifferent = vals[0] !== vals[1] && vals[0] !== vals[2] && vals[1] !== vals[2];
  return allSame || allDifferent;
};

export const findSets = (cards: CardInfo[]): CardIndexSet[] => {
  const sets: CardIndexSet[] = [];
  for (let c1 = 0; c1 < cards.length; c1++) {
    for (let c2 = c1 + 1; c2 < cards.length; c2++) {
      for (let c3 = c2 + 1; c3 < cards.length; c3++) {
        if (isSet([cards[c1], cards[c2], cards[c3]])) {
          sets.push([c1, c2, c3]);
        }
      }
    }
  }
  return sets;
};
