import React, { useEffect, useState } from 'react';
import { Header, Loader, Button } from 'semantic-ui-react';
import SecretCode from '../components/secretCode';
import GameRecords from '../components/gameRecords';
import AttemptsCount from '../components/attemptsCount';
import Counter from '../components/counter';
import { getRandomNumber } from '../callApi';
import { MAX_ATTEMPTS, difficulties } from '../config';
import { compareGuessVsRandom } from '../utils/compareGuessVsRandom';
import '../assets/styles.css';
import CurrentLevel from '../components/currentLevel';
import Navbar from '../components/navbar';

const Game = () => {
  const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [records, setRecords] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [difficulty, setDifficulty] = useState(difficulties[0].value);

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

  return (
    <div className='game-container'>
      <Navbar
        difficulties={difficulties}
        playNewGame={playNewGame}
        setDifficulty={setDifficulty}
      />
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
        <AttemptsCount attemptsLeft={MAX_ATTEMPTS - records.length} />
      </section>
      <section>
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
      </section>
      <Button
        color='purple'
        onClick={submitNumber}
        disabled={records.length >= MAX_ATTEMPTS || endGame}
      >
        Check Answer
      </Button>
      <div className='confirmation-btns'></div>
      <GameRecords
        records={records}
        random={random}
        attemptsLeft={MAX_ATTEMPTS - records.length}
        count={count}
      />
      <CurrentLevel difficulty={difficulty} />
    </div>
  );
};

export default Game;
