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

const FeedbackBasedOnAnswers = (random, perfectMatch, equalValues) => {
  const correctNumbersTotal = perfectMatch + equalValues;
  if (perfectMatch === random.length) {
    <Header as='h5' content='you won' />;
    // console.log('you won');
  } else if (perfectMatch === 0 && equalValues === 0) {
    <Header as='h5' content='all are incorrect' />;
    // console.log('all are incorrect');
  } else if (perfectMatch !== 0 || equalValues !== 0) {
    <Header as='h5' content='blabla' />;
    // console.log(
    //   `${correctNumbersTotal} correct numbers and ${+perfectMatch} correct  location`
    // );
  }
};

const Feedback = ({ random, perfectMatch, equalValues }) => {
  return (
    <FeedbackBasedOnAnswers
      random={random}
      perfectMatch={perfectMatch}
      equalValues={equalValues}
    />
  );
};

export default Feedback;
