import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu secondary horizontal>
      <Menu.Item name='home' />
      <Menu.Item name='settings' />
      <Dropdown pointing text='Display Options'>
        <Dropdown.Menu>
          <Dropdown.Header>Level</Dropdown.Header>
          <Dropdown.Item>Easy</Dropdown.Item>
          <Dropdown.Item>Medium</Dropdown.Item>
          <Dropdown.Item>Hard</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Navbar;
