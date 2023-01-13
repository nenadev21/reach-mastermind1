import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const Feedback = () => {
  return (
    <div className='feedback'>
      <div>Your answers so far:</div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>3456</Grid.Column>
          <Grid.Column columns={2}>
            <Icon name='star' color='green' />
            <Icon name='star' color='orange' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>1234</Grid.Column>
          <Grid.Column columns={2}>
            <Icon name='star' color='green' />
            <Icon name='star' color='orange' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Feedback;
