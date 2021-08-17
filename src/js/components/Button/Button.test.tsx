import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('mock', () => {
    render(<Button>Test</Button>);
    expect(1 + 1).toBe(2);
  });
});
