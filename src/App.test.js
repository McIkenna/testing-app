import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-react')
  expect(linkElement.href).toContain('https://mercy-okonna.netlify.app/')
})
