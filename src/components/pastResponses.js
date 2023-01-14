import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import Feedback from '../components/feedback';
import '../assets/styles.css';

const PastResponses = () => {
  return (
    <div className='past-responses-container'>
      <div>Your answers so far:</div>
      <Card>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>3456</Grid.Column>
            <Grid.Column columns={2}>
              <Feedback />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>3456</Grid.Column>
            <Grid.Column columns={2}>
              <Feedback />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    </div>
  );
};

export default PastResponses;
