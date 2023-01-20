import React from 'react';
import { Label } from 'semantic-ui-react';

const CurrentLevel = ({ difficulty }) => {
  if (difficulty === 2) {
    return (
      <small>
        You are playing in level{' '}
        <Label basic color='violet'>
          Easy
        </Label>
      </small>
    );
  } else if (difficulty === 3) {
    return (
      <small>
        You are playing in level{' '}
        <Label basic color='violet'>
          Medium
        </Label>
      </small>
    );
  } else {
    return (
      <small>
        You are playing in level{' '}
        <Label basic color='violet'>
          Hard
        </Label>
      </small>
    );
  }
};

export default CurrentLevel;
