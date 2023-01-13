import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import SecretCode from '../components/secretCode';
import Feedback from '../components/feedback';
import SideHelper from '../components/sideHelper';
import UserGuesses from '../components/userGuesses';

//steps:
//computer pick a random number
//random number gets stored in variable
//User types a number with guessing
// User hits "try"
//Chosen number gets stored in variable
//Numbers are converted into comparable formats
//Numbers are compared
//app identify  similarity and location
//app gives feedback
//lock unlocks if code has been guessed

const Game = () => {
  const [random, setRandom] = useState([]);

  //I deleted strict mode under index.js because it was calling the api twice and changing the random number on screen
  useEffect(() => {
    //TODO: move the apiCall into its own file and import it here
    axios
      .get(
        'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new'
      )
      .then((res) => {
        const editTxtToArr = (txt) => txt.replace(/\n/g, '').split('');
        const editedData = editTxtToArr(res.data);
        setRandom(editedData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log('random', random);

  return (
    <div className='game-container'>
      <Header
        as='h3'
        content='Hi! The secret code is ready. It is time to play. Good luck!'
      />
      <SecretCode />
      <SideHelper />
      <UserGuesses random={random} />
      <Feedback />
    </div>
  );
};

export default Game;
