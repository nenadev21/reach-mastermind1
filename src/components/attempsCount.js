import React from 'react';
import '../assets/styles.css';
import { Header } from 'semantic-ui-react';

const AttempsCount = ({ attempsLeft }) => {
  return (
    <Header as='h5' color='purple' content={`Attempts left: ${attempsLeft}`} />
  );
};

export default AttempsCount;
