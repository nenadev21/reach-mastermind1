import React from 'react';
import ColorCoding from './colorCoding';
import AttempsCount from './attempsCount';
import { Segment } from 'semantic-ui-react';

const SideHelper = () => {
  return (
    <>
      <Segment className='side-helper' size='mini'>
        <AttempsCount />
        <ColorCoding />
      </Segment>
    </>
  );
};

export default SideHelper;
