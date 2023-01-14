import React, { useState } from 'react';
import { Form, Input, Button, Select, Dropdown } from 'semantic-ui-react';

const UserGuesses = ({ random }) => {
  const [entry, setEntry] = useState('');
  const [posAndNumMatch, setPosAndNumMatch] = useState('');
  const [numMatch, setNumMatch] = useState('');

  const options = [
    { key: '0', label: '0', value: '0' },
    { key: '1', label: '1', value: '1' },
    { key: '2', label: '2', value: '2' },
    { key: '3', label: '3', value: '3' },
    { key: '4', label: '4', value: '4' },
    { key: '5', label: '5', value: '5' },
    { key: '6', label: '6', value: '6' },
    { key: '7', label: '7', value: '7' },
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

  // console.log(checkEntry(entry, random));
  console.log(entry);

  const handleSubmit = (e) => {
    console.log(e.select.value);
    setEntry(e.select.value);
    e.preventDefault();
  };

  //I need to prevent repeating dropdown code below
  //I need to make it that all dropdown values are stored in an array

  return (
    <div className='user-guesses-container'>
      <Form onSubmit={() => handleSubmit(entry)}>
        <Dropdown
          placeholder='Pick a number'
          clearable
          openOnFocus
          selection
          value={entry}
          options={options}
          onChange={(e, data) => setEntry(data.value)}
        ></Dropdown>
        <Dropdown
          placeholder='Pick a number'
          clearable
          openOnFocus
          selection
          value={entry}
          options={options}
          onChange={(e, data) => setEntry(data.value)}
        ></Dropdown>
        <Dropdown
          placeholder='Pick a number'
          clearable
          openOnFocus
          selection
          value={entry}
          options={options}
          onChange={(e, data) => setEntry(data.value)}
        ></Dropdown>
        <Dropdown
          placeholder='Pick a number'
          clearable
          openOnFocus
          selection
          value={entry}
          options={options}
          onChange={(e, data) => setEntry(data.value)}
        ></Dropdown>
      </Form>
    </div>
  );
};

export default UserGuesses;
