import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import GameTitle from '../components/gameTitle';
import { Link } from 'react-router-dom';
import '../assets/styles.css';
import Instructions from '../components/instructions';

//TODO: Can I create a function that can help me display the home btns without needing to repeat code?

const Home = () => {
  const [displayInstructions, setDisplayInstructions] = useState(false);

  return (
    <div className='home-container'>
      <GameTitle />
      <section className='home-btns'>
        <Link className='home-btn-wrapper'>
          <Button
            className='home-btn'
            basic
            color='violet'
            onClick={() => setDisplayInstructions(!displayInstructions)}
          >
            How to Play
          </Button>
        </Link>
        {displayInstructions && <Instructions />}
        <Link to='/game' className='home-btn-wrapper'>
          <Button className='home-btn' color='purple'>
            Play
          </Button>
        </Link>
        <Link className='home-btn-wrapper'>
          <Button className='home-btn' basic color='violet'>
            Rewards
          </Button>
        </Link>
        <Link className='home-btn-wrapper'>
          <Button className='home-btn' basic color='violet'>
            Settings
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
