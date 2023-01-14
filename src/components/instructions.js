import React from 'react';
import { Icon, List, Header } from 'semantic-ui-react';
import '../assets/styles.css';

const Instructions = () => {
  return (
    <div className='instructions'>
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
        focus and logic skills
      </p>
      <List>
        <List.Item as='a'>
          <Icon name='target' />
          <List.Content>
            <List.Header>Objective</List.Header>
            <List.Description>
              Your goal is to discover the correct sequence of numbers in the
              fewest tries possible. Possible numbers are 0-7. The secret code
              can include repeats.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as='a'>
          <Icon name='game' />
          <List.Content>
            <List.Header>Gameplay</List.Header>
            <List.Description>
              You will have 10 attemps. Enter your answer and hit check to test
              it.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as='a'>
          <Icon name='gem' />
          <List.Content>
            <List.Header>Outputs</List.Header>
            <List.Description>
              The game will tell you if a number is correct or a number and its
              location are correct.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
      <Header as='h4'>Examples</Header>
      <p>
        Here I can add some examples similar to the ones that will be displayed
        during the game and explain the reasoning
      </p>
    </div>
  );
};

export default Instructions;
