import React from 'react';
import { Icon, List, Header, Button } from 'semantic-ui-react';

const Instructions = () => {
  return (
    <>
      <List>
        <List.Item as='a'>
          <Icon name='target' />
          <List.Content>
            <List.Header>Objective</List.Header>
            <List.Description>
              Your goal is to discover the correct sequence of numbers in the
              fewest tries possible. Possible numbers are 0-7. It can include
              repeats.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as='a'>
          <Icon name='game' />
          <List.Content>
            <List.Header>Gameplay</List.Header>
            <List.Description>
              You will have 10 attemps. Type your answer and hit check to test
              your answer.
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
    </>
  );
};

export default Instructions;
