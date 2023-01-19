import React from 'react';
import { Icon, List } from 'semantic-ui-react';
import '../assets/styles.css';

const Instructions = () => {
  const instructionsCopy = [
    {
      key: 1,
      title: 'Objective',
      description:
        'Your goal is to discover the correct sequence of numbers in the fewest tries possible. The secret code includes numbers from 0 until 7 and it can include repeats.',
      icon: 'target',
    },
    {
      key: 2,
      title: 'Gameplay',
      description:
        'You will have 10 attemps. After you select your numbers, click the button "Check Answer" to compare your response with the secret code.',
      icon: 'game',
    },
    {
      key: 3,
      title: 'Outputs',
      description:
        'You will receive feedback on each attempt. The game will tell you if a number is correct or a number and its location are correct. That will help you guess the secret code.',
      icon: 'gem',
    },
  ];

  return (
    <div className='instructions-container'>
      <p>
        Raise! is a clone of{' '}
        <span>
          <a
            href='https://en.wikipedia.org/wiki/Mastermind_(board_game)'
            target='_blank'
            rel='noreferrer'
          >
            Mastermind
          </a>
        </span>
        , a code breaking game. It helps you train your brain by improving your
        focus and logic skills.
      </p>
      {instructionsCopy.map((ins, index) => (
        <List key={`instructions-${index}`}>
          <List.Item as='a' className='instruction-list-item'>
            <Icon name={ins.icon} color='purple' />
            <List.Content>
              <List.Header>{ins.title}</List.Header>
              <List.Description>{ins.description}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      ))}
    </div>
  );
};

export default Instructions;
