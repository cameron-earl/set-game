import React from 'react';

import { CardInfo } from '../../helpers/models';
import Shape from '../Shapes/Shape';
import styles from './Card.module.css';

type CardProps = {
  cardInfo: CardInfo;
  selected: boolean;
  handleSelect: Function;
};

const Card = ({ cardInfo: { count, color, shape, fill }, selected, handleSelect }: CardProps) => {
  return (
    <div className={styles.Card + ' ' + (selected ? styles.selected : '')} onClick={() => handleSelect()}>
      <Shape color={color} shape={shape} fill={fill} count={count} />
    </div>
  );
};

export default Card;
