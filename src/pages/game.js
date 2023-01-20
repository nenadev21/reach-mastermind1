import React, { useEffect, useState } from 'react';
import {
  Header,
  Loader,
  Button,
  MenuItem,
  Menu,
  Dropdown,
} from 'semantic-ui-react';
import SecretCode from '../components/secretCode';
import GameRecordsNew from '../components/gameRecords';
import AttempsCount from '../components/attempsCount';
import Counter from '../components/counter';
import { getRandomNumber } from '../callApi';
import { MAX_ATTEMPTS, difficulties } from '../config';
import { compareGuessVsRandom } from '../utils/compareGuessVsRandom';
import '../assets/styles.css';
import CurrentLevel from '../components/currentLevel';

const Game = () => {
  const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [records, setRecords] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [difficulty, setDifficulty] = useState(difficulties[1].value);

  const playNewGame = async () => {
    setIsLoading(true);
    const getNewRandom = await getRandomNumber(difficulty);
    setRandom(getNewRandom);
    setIsLoading(false);
    setRecords([]);
    setCount(Array.from({ length: difficulty }, () => 0));
    setEndGame(false);
    setIsLoading(false);
  };

  useEffect(() => {
    playNewGame();
  }, [difficulty]);

  const increment = (pos) => {
    // se itera el arreglo y solo se modifica el número de la posición recibida como argumento
    // por ejemplo si pos = 2, se deberia modificar solo el tercer el elemento del arreglo
    setCount((count) => count.map((c, index) => (index === pos ? c + 1 : c)));
  };
  const decrement = (pos) => {
    setCount((count) => count.map((c, index) => (index === pos ? c - 1 : c)));
  };

  const submitNumber = () => {
    const countToArrOfStr = [...count.join('').split('')];
    const {
      gameMatch,
      allIncorrect,
      correctNumberCount,
      correctPositionCount,
    } = compareGuessVsRandom(countToArrOfStr, random);
    const record = {
      value: count,
      gameMatch,
      allIncorrect,
      correctNumberCount,
      correctPositionCount,
    };
    setRecords((records) => [record, ...records]);
    console.log('random:', random);
  };

  const handleDifficultyChange = (e, data) => {
    setDifficulty(data.value);
  };

  return (
    <div className='game-container'>
      <Menu stackable fluid size='large'>
        <MenuItem name='home' position='right'>
          Home
        </MenuItem>
        <Dropdown
          item
          position='right'
          style={{ border: 'none' }}
          selection
          text='Level'
          onChange={handleDifficultyChange}
          options={difficulties}
        />
        <MenuItem onClick={playNewGame} style={{ color: 'purple' }}>
          Play New Game
        </MenuItem>
      </Menu>
      <Header
        className='game-page-instructions'
        content={
          isLoading ? (
            <>
              <Loader active inline='centered' />
            </>
          ) : (
            <Header
              as='h3'
              content={`It's time to play! Guess the secret code. The secret code contains numbers from 0 to 7 and can have repeats. In each game, you can try 10 different combinations.`}
            />
          )
        }
      />
      <section>
        <SecretCode random={random} />
      </section>
      <section className='attempts-count-section'>
        <AttempsCount attempsLeft={MAX_ATTEMPTS - records.length} />
      </section>
      <div style={{ display: 'flex' }} className='user-guesses-container'>
        {count.map((c, index) => (
          <Counter
            key={index}
            count={c}
            increment={() => increment(index)}
            decrement={() => decrement(index)}
          />
        ))}
      </div>
      <Button
        color='purple'
        onClick={submitNumber}
        disabled={records.length >= MAX_ATTEMPTS || endGame}
      >
        Check Answer
      </Button>
      <div className='confirmation-btns'></div>
      <GameRecordsNew records={records} random={random} />
      <CurrentLevel difficulty={difficulty} />
    </div>
  );
};

export default Game;
