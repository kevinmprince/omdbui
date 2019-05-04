/**
 * Copyright 2019, Kevin Prince
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// TODO: import enzyme,
//       import Adapter from 'enzyme-adapter-react-16'
//       configure converage report
// cra hides the webpack config, so don't have time to dig into it and don't want to write all my
// test cases without it. So, we will save that work for another day ;)
