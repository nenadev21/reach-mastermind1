import React from 'react';
import { Label, List, Header } from 'semantic-ui-react';
import Feedback from './feedback';
import '../assets/styles.css';
import { MAX_ATTEMPTS } from '../config';

export default function GameRecords({ records, random, attemptsLeft, count }) {
  return (
    <div>
      {records.map((record, index) => (
        <List divided key={`game-rec-${index}`}>
          <List.Item>
            <List.Content>
              <List.Header as='h4' className='answer-record'>
                <Label className='past-record-num' size='large'>
                  <Header as='h5'>{record.value}</Header>
                </Label>
              </List.Header>
              <Feedback
                count={count}
                random={random}
                gameMatch={record.gameMatch}
                allIncorrect={record.allIncorrect}
                correctNumberCount={record.correctNumberCount}
                correctPositionCount={record.correctPositionCount}
                attemptsLeft={attemptsLeft}
              />
            </List.Content>
          </List.Item>
        </List>
      ))}
    </div>
  );
}
