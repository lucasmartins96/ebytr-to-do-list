/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('deve renderizar "ebytr to do list"', () => {
  render(<App />);
  expect(screen.getByText(/ebytr to do list/i)).toBeInTheDocument();
});
