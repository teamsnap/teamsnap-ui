import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DateFilter from './DateFilter';

describe('DateFilter component', () => {
  test('should use the title prop to set button text', () => {
    render(<DateFilter name="myDate" onChange={() => {}} title="Click here to select a date" />);

    const Button = screen.getByRole('button');

    expect(Button.innerHTML).toBe('Click here to select a date');
  });
});
