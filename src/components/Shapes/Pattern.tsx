import React from 'react';

import { Color } from '../../helpers/models';
import styles from './Shape.module.css';

export type PatternProps = {
  color: Color;
};

const Pattern = ({ color }: PatternProps) => (
  <defs>
    <pattern id={`hatched-${color}`} width="3" height="10" patternUnits="userSpaceOnUse">
      <line className={styles[color]} x1="0" y1="0" x2="20" y2="0" strokeWidth="4" />
    </pattern>
  </defs>
);

export default Pattern;
