import React from 'react';

const feedbackOptions = [
  'No matches exist',
  'A number and position matches in X cases',
  'A number matches in X cases',
  'Perfect match, you have hacked the code!',
];

const Feedback = () => {
  return <div>{feedbackOptions[2]}</div>;
};

export default Feedback;
