import React from 'react';
import '../assets/styles.css';
import { Header } from 'semantic-ui-react';

const AttemptsCount = ({ attemptsLeft }) => {
  return (
    <Header
      as='h5'
      color='purple'
      content={`You have ${attemptsLeft} attempts left`}
    />
  );
};

export default AttemptsCount;
