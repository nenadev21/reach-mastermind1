import React from 'react';
import { Label, Header } from 'semantic-ui-react';

const ColorCoding = () => {
  return (
    <>
      <div>
        <Label color='green' circular empty />{' '}
        <span>Correct number and position</span>
      </div>
      <div>
        <Label color='orange' circular empty />
        <span>Correct number</span>
      </div>
    </>
  );
};

export default ColorCoding;
