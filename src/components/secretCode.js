import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

//component will display secret code once user discover it
//componet will change icon when game is successful

const SecretCode = ({ random }) => {
  return (
    <ul>
      {random.map((item, index) => (
        <Icon
          key={`ran-${index}`}
          name='question circle'
          color='purple'
          size='big'
        />
      ))}
    </ul>
  );
};

export default SecretCode;
