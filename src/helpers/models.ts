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

export enum Attribute {
  color = 'color',
  fill = 'fill',
  shape = 'shape',
  count = 'count',
}

export type CardInfo = {
  [Attribute.color]: Color;
  [Attribute.fill]: Fill;
  [Attribute.shape]: Shapes;
  [Attribute.count]: 1 | 2 | 3;
};

export type CardInfoSet = [CardInfo, CardInfo, CardInfo];

export type CardIndexSet = [number, number, number];
