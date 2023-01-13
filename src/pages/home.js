import React from 'react';
import { Button } from 'semantic-ui-react';
import GameTitle from '../components/gameTitle';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const Home = () => {
  return (
    <div className='home-container'>
      <GameTitle />
      <section className='home-btns'>
        <Link to='/instructions' className='home-btn-wrapper'>
          <Button color='teal'>How to Play</Button>
        </Link>
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
