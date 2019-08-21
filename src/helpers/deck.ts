import { shuffleArr } from './helpers';
import { CardInfo, Color, Fill, Shapes } from './models';

const buildCard = (c: number, f: number, s: number, n: number): CardInfo => ({
  color: Object.keys(Color)[c % 3] as Color,
  fill: Object.keys(Fill)[f % 3] as Fill,
  shape: (s % 3) as Shapes,
  count: ((n % 3) + 1) as 1 | 2 | 3,
});

const buildCardFromI = (i: number): CardInfo =>
  buildCard(i % 3, Math.floor(i / 3) % 3, Math.floor(i / 9) % 3, Math.floor(i / 27) % 3);

const deck: CardInfo[] = new Array(81).fill(null).map((_, i) => buildCardFromI(i));

export const buildNewDeck = (): CardInfo[] => shuffleArr(deck);
