import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../atoms/HelloWorld';

it('should have hello world', () => {
  render(<HelloWorld />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeVisible();
});
