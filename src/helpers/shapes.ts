export enum Color {
  purple = 'purple',
  red = 'red',
  green = 'green',
}

export enum Fill {
  empty = 'empty',
  hatched = 'hatched',
  solid = 'solid',
}

export enum Shapes {
  diamond,
  oval,
  squiggle,
}

export type CardInfo = {
  color: Color;
  fill: Fill;
  shape: Shapes;
  count: 1 | 2 | 3;
};

export type CardInfoSet = [CardInfo, CardInfo, CardInfo];
