import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const UserGuesses = ({ random }) => {
  const [entries, setEntries] = useState([]);
  const [posAndNumMatch, setPosAndNumMatch] = useState('');
  const [numMatch, setNumMatch] = useState('');
  //note before commiting to main
  //note after running git init

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
        <Form.Group inline>
          <Form.Field>
            <Input />
          </Form.Field>
          <Form.Field>
            <Input />
          </Form.Field>
          <Form.Field>
            <Input />
          </Form.Field>
          <Form.Field>
            <Input />
          </Form.Field>
        </Form.Group>
        <Button type='submit' color='green' size='big'>
          Check Answers
        </Button>
        <div className='secondary-action-btn'>
          <Button>Clear</Button>
          <Button>Restart</Button>
        </div>
      </Form>
    </div>
  );
};

export default UserGuesses;
