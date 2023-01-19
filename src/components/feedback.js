import React from 'react';
import { Header } from 'semantic-ui-react';
import '../assets/styles.css';

// TODO:Add conditional states to display feedback only if matches are greater than 0
//TODO: Fix table for mobile

// feedback:
//  “all incorrect”
// “1 correct number and 1 correct location” // = perfectMatch
// “1 correct number and 0 correct location” // = equalValues
// “3 correct numbers and 2 correct location” // = perfect+equal , perfect

const Feedback = ({
  random,
  gameMatch,
  allIncorrect,
  correctNumberCount,
  correctPositionCount,
}) => {
  // const correctNumbersTotal = perfectMatch + equalValues;
  if (gameMatch) {
    return (
      <div>
        <Header disabled as='h5' content='Congrats! You hacked the code' />
      </div>
    );
  } else if (allIncorrect) {
    return (
      <div>
        <Header disabled as='h5' content='All are incorrect' />;
      </div>
    );
  } else {
    return (
      <div>
        <Header
          disabled
          as='h5'
          content={`${correctNumberCount} correct numbers and ${correctPositionCount} correct
        location`}
        />
      </div>
    );
  }
};

export default Feedback;
