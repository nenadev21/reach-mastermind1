import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const UserGuesses = ({ random }) => {
  const [entries, setEntries] = useState([]);
  const [posAndNumMatch, setPosAndNumMatch] = useState('');
  const [numMatch, setNumMatch] = useState('');

  const options = [
    { key: '0', text: '0', value: '0' },
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
  ];

  function checkEntry(guess, code) {
    let correctPosAndNum = 0;
    let correctNumOnly = 0;
    let codeCopy = [...code];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === code[i]) {
        correctPosAndNum++;
        //I don't understand why setting this to null helps me to not double count
        codeCopy[i] = null;
      }
    }
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] !== code[i] && codeCopy.includes(guess[i])) {
        correctNumOnly++;
        codeCopy[codeCopy.indexOf(guess[i])] = null;
      }
    }
    return [correctPosAndNum, correctNumOnly];
    //how can I take these values to update the state of numMatch and posAndNumMatch?
  }

  console.log(checkEntry(entries, random));

  const handleSubmit = (e) => {
    setEntries([
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
    ]);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
    e.preventDefault();
  };

  return (
    <div className='user-guesses-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal' inline>
          <Form.Select options={options} />
          <Form.Select options={options} />
          <Form.Select options={options} />
          <Form.Select options={options} />
        </Form.Group>
        <Button type='submit' color='green' size='big'>
          Check Answers
        </Button>
      </Form>
      <div className='secondary-action-btn'>
        <Button>Clear</Button>
        <Button>Restart</Button>
      </div>
    </div>
  );
};

export default UserGuesses;
