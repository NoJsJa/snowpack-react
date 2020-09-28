import * as React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'jest';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
