import React, { useEffect, useState } from 'react';
import { Header, Loader, Button } from 'semantic-ui-react';
import SecretCode from '../components/secretCode';
import GameRecords from '../components/gameRecords';
import AttempsCount from '../components/attempsCount';
import Counter from '../components/counter';
import { getRandomNumber } from '../callApi';
import { MAX_ATTEMPTS, num } from '../config';
import { compareGuessVsRandom } from '../utils/compareGuessVsRandom';
import '../assets/styles.css';

//TODO: right now the play new game btn stays disabled until player wins. It needs to be possible for player to start a new game at any time
//TODO: Check why each time a number changes before submitting answer the function is executed again - line 60

const Game = () => {
  const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //count can be change for choice because it will be the complete guess
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [records, setRecords] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const playNewGame = async () => {
    setIsLoading(true);
    const getNewRandom = await getRandomNumber();
    setRandom(getNewRandom);
    setIsLoading(false);
    setRecords([]);
    setCount([0, 0, 0, 0]);
    setEndGame(false);
    setIsLoading(false);
  };

  useEffect(() => {
    playNewGame();
  }, []);

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

  return (
    <div className='game-container'>
      <Header
        className='game-page-instructions'
        content={
          isLoading ? (
            <>
              <Loader active inline='centered' />
            </>
          ) : (
            <Header
              content={`Start guessing the ${num} digits of the secret code. Numbers are from 0 to 7 and repeats are allowed.`}
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
      <div className='confirmation-btns'>
        <Button
          color='purple'
          onClick={submitNumber}
          disabled={records.length >= MAX_ATTEMPTS || endGame}
        >
          Check Answer
        </Button>
        <Button basic onClick={playNewGame}>
          Play New Game
        </Button>
      </div>
      <GameRecords records={records} random={random} />
    </div>
  );
};

export default Game;
