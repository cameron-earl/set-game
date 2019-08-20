import React from 'react';

import { CardInfo, Fill, Shapes } from '../../helpers/shapes';
import Pattern from './Pattern';
import styles from './Shape.module.css';

type InnerShapeProps = {
  classes: string;
  fill: string;
};

const Diamond = ({ classes, fill }: InnerShapeProps) => (
  <polygon className={classes} fill={fill} points="40,5 5,92 40,180 75,92" />
);
const Oval = ({ classes, fill }: InnerShapeProps) => (
  <rect className={classes} fill={fill} x="5" y="5" width="70" height="175" rx="35" />
);
const Squiggle = ({ classes, fill }: InnerShapeProps) => (
  <path
    className={classes}
    fill={fill}
    d="M16 7C51-5 88 34 74 78c-6 18-21 34-5 60 20 29 7 37-21 35S1 148 5 120c7-39 34-42 7-89-5-10-9-20 4-24z"
  />
);

const Shape = ({ color, fill, shape, count }: CardInfo) => {
  const shapeComponents = {
    [Shapes.diamond]: Diamond,
    [Shapes.oval]: Oval,
    [Shapes.squiggle]: Squiggle,
  };

  const InnerShape = shapeComponents[shape];

  const fillVal = fill === Fill.hatched ? `url(#${fill}-${color})` : fill === Fill.empty ? 'white' : color;

  return (
    <>
      <div className={styles.Shape}>
        <div>
          {new Array(count).fill(null).map((_, i) => (
            <svg
              viewBox="0 0 80 185"
              preserveAspectRatio="xMinYMin meet"
              key={`shape${color}${fill}${shape}${count}${i}`}
            >
              {fill === Fill.hatched && <Pattern color={color} />}
              <InnerShape classes={[styles[color], styles.setline].join(' ')} fill={fillVal} />
            </svg>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shape;
