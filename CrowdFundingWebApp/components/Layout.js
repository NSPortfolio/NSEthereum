import React from 'react';
import Header from './Header';

export default () => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};
