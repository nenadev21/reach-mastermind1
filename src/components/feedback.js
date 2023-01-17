import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../assets/styles.css';

// TODO:Add conditional states to display feedback only if matches are greater than 0
//TODO: Fix table for mobile

const Feedback = ({ exactMatches, matchesByValue }) => {
  return (
    <>
      <div>
        <span className='feedback-count'>{exactMatches}</span>
        <span>
          number
          <Icon name='checkmark' size='small' color='green' />{' '}
        </span>{' '}
        <span>
          {' '}
          position <Icon name='checkmark' size='small' color='green' />
        </span>
      </div>
      <div>
        <span className='feedback-count'>{matchesByValue}</span>
        <span>
          number
          <Icon name='checkmark' size='small' color='green' />{' '}
        </span>{' '}
        <span>
          {' '}
          position <Icon name='close' size='small' color='red' />
        </span>
      </div>
    </>
  );
};

export default Feedback;
