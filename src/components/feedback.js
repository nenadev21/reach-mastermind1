import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import '../assets/styles.css';

const Feedback = ({
  random,
  gameMatch,
  allIncorrect,
  correctNumberCount,
  correctPositionCount,
  attemptsLeft,
  count,
}) => {
  if (gameMatch) {
    return (
      <div>
        <Header as='h5' disabled>
          You did it!!! That's the right code
          <span>
            <Icon name='smile outline' color='violet' />
            <Icon name='smile outline' color='violet' />
            <Icon name='smile outline' color='violet' />
          </span>
          Play again!
        </Header>
      </div>
    );
  } else if (allIncorrect) {
    return (
      <div>
        <Header disabled as='h5' content='All are incorrect. Keep trying!' />
      </div>
    );
  } else if (attemptsLeft === 0) {
    return (
      <div>
        <Header
          disabled
          as='h5'
          content={`No more attempts left. The secret code was ${count} Play a new game.`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Header
          disabled
          as='h5'
          content={`${correctNumberCount} correct number${
            correctNumberCount >= 2 ? `s` : ''
          } and ${correctPositionCount} correct
        location`}
        />
      </div>
    );
  }
};

export default Feedback;
