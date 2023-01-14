import React from 'react';
import { Grid, Icon, Label } from 'semantic-ui-react';

const Feedback = () => {
  return (
    <div className='feedback'>
      <div>Your answers so far:</div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>3456</Grid.Column>
          <Grid.Column columns={2}>
            <Label color='green' circular>
              1
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>4455</Grid.Column>
          <Grid.Column columns={2}>
            <Label color='green' circular>
              1
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Feedback;
