import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/components/Button/Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const button = document.createElement('button');
    ReactDOM.render(<Button label="Flash" />, button);
    ReactDOM.unmountComponentAtNode(button);
  });
});
