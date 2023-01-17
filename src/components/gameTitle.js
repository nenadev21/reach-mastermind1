import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../assets/styles.css';

const GameTitle = () => {
  return (
    <div className='game-title-container'>
      <Icon name='lock' color='purple' size='huge' />
      <h1 className='logo'>Raise!</h1>
      <p>Hack the code and sharpen your mind</p>
    </div>
  );
};

export default GameTitle;
