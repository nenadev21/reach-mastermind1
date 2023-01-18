import React from 'react';
import { Table, Icon, Header } from 'semantic-ui-react';
import Feedback from './feedback';
import '../assets/styles.css';

const GameRecords = ({ records, random }) => {
  const TableFirstRow = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Your Answers</Table.HeaderCell>
          <Table.HeaderCell>Feedback</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  };
  return (
    <div>
      <Table basic='very'>
        {records.length > 0 ? <TableFirstRow /> : ``}
        {records.map((record, index) => (
          <Table.Body key={`recor-table-${index}`}>
            <Table.Row>
              <Table.Cell style={{ letterSpacing: '0.5rem' }}>
                {record.value}
              </Table.Cell>
              <Table.Cell>
                <Feedback
                  random={random}
                  allAreCorrect={record.gameMatch}
                  perfectMatch={record.perfectMatch}
                  equalValues={record.equalValues}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default GameRecords;
