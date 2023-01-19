import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';

const Counter = ({ count, increment, decrement }) => {
  return (
    <article className='number-wrap'>
      <Header as='h1' content={count} />
      <Button.Group icon size='small'>
        <Button onClick={decrement} disabled={count <= 0}>
          <Icon name='minus' />
        </Button>
        <Button onClick={increment} disabled={count >= 7}>
          <Icon name='plus' />
        </Button>
      </Button.Group>
    </article>
  );
};

export default Counter;
