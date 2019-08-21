import React, { useState } from 'react';

import { buildNewDeck } from '../../helpers/deck';
import { CardInfoSet } from '../../helpers/models';
import { findSets, isSet } from '../../helpers/setHelpers';
import Card from '../Card/Card';
import styles from './Game.module.css';

const Game = () => {
  const [deck, setDeck] = useState(buildNewDeck());
  const [inPlay, setInPlay] = useState(deck.slice(0, 12));
  const [setsRemaining, setSetsRemaining] = useState(findSets(inPlay));
  const [playerSetCount, setPlayerSetCount] = useState(0);
  const [cpuSetCount, setCpuSetCount] = useState(0);
  const [selectedCards, setSelectedCards] = useState([] as number[]);
  const sets = findSets(inPlay);
  console.log(setsRemaining.length);
  if (!setsRemaining.length) {
    // check if sets remaining in deck
    // if so, reshuffle and reserve
    // otherwise, game over
    const newDeck = buildNewDeck();
    const newInPlay = newDeck.slice(0, 12);
    const newSetsRemaining = findSets(newInPlay);
    setDeck(newDeck);
    setInPlay(newInPlay);
    setSetsRemaining(newSetsRemaining);
  }

  const handleSelect = (i: number) => () => {
    const isSelected = selectedCards.includes(i);
    if (isSelected) {
      setSelectedCards(selectedCards.filter(n => n !== i));
    } else if (selectedCards.length === 2) {
      const newSelectedCards = [...selectedCards, i].sort((a, b) => a - b);
      const selectedAreSet = isSet(newSelectedCards.map(n => inPlay[n]) as CardInfoSet);
      if (selectedAreSet) {
        // ++playerSetCount
        // replace cards in play with new cards from deck
        const newSetsRemaining = setsRemaining.filter(s => s.toString() !== newSelectedCards.toString());
        if (newSetsRemaining.length !== setsRemaining.length) {
          console.log(`Set found! ${newSetsRemaining.length} left!`);
          setSetsRemaining(newSetsRemaining);
        }
      } else {
        console.log('That is not a set. Not at all.');
        // do something to let user know?
      }
      // clear selectedCards
      setSelectedCards([]);
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
