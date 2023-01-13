import React from 'react';
import { Icon } from 'semantic-ui-react';

const ColorCoding = () => {
  return (
    <>
      <p>
        <Icon color='green' name='star' size='small' />
        Correct number and position
      </p>
      <p>
        <Icon color='orange' name='star' size='small' />
        Correct number
      </p>
    </>
  );
};

export default ColorCoding;
