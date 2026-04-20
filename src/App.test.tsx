import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { test, expect } from '@jest/globals';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});