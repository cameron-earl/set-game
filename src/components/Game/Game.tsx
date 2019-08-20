import React, { useState } from 'react';

import { buildNewDeck } from '../../helpers/deck';
import { isSet } from '../../helpers/setHelpers';
import { CardInfoSet } from '../../helpers/shapes';
import Card from '../Card/Card';
import styles from './Game.module.css';

const Game = () => {
  const [deck, setDeck] = useState(buildNewDeck());
  const [inPlay, setInPlay] = useState(deck.slice(0, 12));
  const [playerSetCount, setPlayerSetCount] = useState(0);
  const [cpuSetCount, setCpuSetCount] = useState(0);
  const [selectedCards, setSelectedCards] = useState([] as number[]);

  const handleSelect = (i: number) => () => {
    const isSelected = selectedCards.includes(i);
    if (isSelected) {
      setSelectedCards(selectedCards.filter(n => n !== i));
    } else if (selectedCards.length === 2) {
      const newSelectedCards = [...selectedCards, i];
      if (isSet(newSelectedCards.map(n => inPlay[i]) as CardInfoSet)) {
        // ++playerSetCount
        // replace cards in play with new cards from deck
        // clear selectedCards
      }
    } else {
      setSelectedCards([...selectedCards, i]);
    }
  };

  const shapeEls = inPlay.map((cardInfo, i) => (
    <Card
      cardInfo={cardInfo}
      selected={selectedCards.includes(i)}
      handleSelect={handleSelect(i)}
      key={`${cardInfo.shape}${cardInfo.color}${cardInfo.fill}${cardInfo.count}`}
    />
  ));

  return (
    <div className={styles.Game}>
      <div className={styles.gameContainer}>{shapeEls}</div>
    </div>
  );
};

export default Game;
