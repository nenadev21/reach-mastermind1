import React from 'react';
import '../assets/styles.css';
import { Segment } from 'semantic-ui-react';

const AttempsCount = () => {
  return (
    <div className='attemps-count-container'>
      <Segment className='side-helper' size='mini'>
        Attempts Left: <span>5</span>
      </Segment>
    </div>
  );
};

export default AttempsCount;
