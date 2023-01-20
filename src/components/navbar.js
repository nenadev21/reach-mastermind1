import React from 'react';
import { Menu, Dropdown, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = ({ difficulties, playNewGame, setDifficulty }) => {
  const handleDifficultyChange = (e, data) => {
    setDifficulty(data.value);
  };

  return (
    <Menu stackable fluid size='large'>
      <Link to='/'>
        <MenuItem name='home'>Home</MenuItem>
      </Link>

      <Dropdown
        position='right'
        item
        style={{ border: 'none' }}
        selection
        text='Level'
        onChange={handleDifficultyChange}
        options={difficulties}
      />
      <MenuItem
        onClick={playNewGame}
        style={{ color: 'purple' }}
        position='right'
      >
        Play New Game
      </MenuItem>
    </Menu>
  );
};

export default Navbar;
