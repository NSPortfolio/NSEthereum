import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';

export default () => {
  return (
      <Header/>
    <Container>
      {props.children}
    </Container>
  );
};
