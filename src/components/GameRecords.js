import React from 'react';
import { Table } from 'semantic-ui-react';
import Feedback from './feedback';
import '../assets/styles.css';

const GameRecords = ({ records }) => {
  const TableFirstRow = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Your Answers</Table.HeaderCell>
          <Table.HeaderCell>Hints</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  };
  return (
    <div style={{ margin: 0 }}>
      <Table basic='very' celled collapsing>
        {records.length > 0 ? <TableFirstRow /> : ``}
        {records.map((record, index) => (
          <Table.Body key={`recor-table-${index}`}>
            <Table.Row>
              <Table.Cell>{record}</Table.Cell>
              <Table.Cell>Feedback</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default GameRecords;
