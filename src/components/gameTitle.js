import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const GameTitle = () => {
  return (
    <>
      <Header as='h2' icon textAlign='center'>
        <Icon name='lock' color='purple' size='huge' />
        <Header.Content>Mastermind</Header.Content>
        <Header.Subheader>Hack the code, grow your mind.</Header.Subheader>
      </Header>
    </>
  );
};

export default GameTitle;
