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
        <Button
          color='teal'
          onClick={() => setDisplayInstructions(!displayInstructions)}
        >
          How to Play
        </Button>
        {displayInstructions && <Instructions />}
        <Link to='/game' className='home-btn-wrapper'>
          <Button color='purple'>Play</Button>
        </Link>
        <Link className='home-btn-wrapper'>
          <Button color='blue'>Rewards</Button>
        </Link>
        <Link className='home-btn-wrapper'>
          <Button color='violet'>Settings</Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
