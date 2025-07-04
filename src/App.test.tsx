import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders app container', () => {
  render(<App />);
  expect(screen.getByTestId('app-container')).toBeInTheDocument();
});