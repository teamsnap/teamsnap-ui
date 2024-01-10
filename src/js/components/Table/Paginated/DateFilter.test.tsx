import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import DateFilter from './DateFilter';

describe('DateFilter component', () => {
  test('should use the title prop to set button text', () => {
    render(<DateFilter name="myDate" onChange={() => {}} title="Click here to select a date" />);

    const Button = screen.getByRole('button');

    expect(Button.innerHTML).toBe('Click here to select a date');
  });

  test('should start with hidden flyout', () => {
    render(<DateFilter name="myDate" onChange={() => {}} title="Click here to select a date" />);

    const Flyout = screen.queryByTestId('flyout');

    expect(Flyout).toBeNull();
  });

  test('should open flyout when click on button', () => {
    render(<DateFilter name="myDate" onChange={() => {}} title="Click here to select a date" />);

    const Button = screen.getByTestId('toggle-flyout-button');
    fireEvent.click(Button);
    const Flyout = screen.queryByTestId('flyout');

    expect(Flyout).not.toBeNull();
  });
});
