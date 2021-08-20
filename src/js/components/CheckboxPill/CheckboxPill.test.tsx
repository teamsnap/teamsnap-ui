import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import CheckboxPill from './CheckboxPill';

describe('CheckboxPill component', () => {
  test('should render an inactive pill', () => {
    render(<CheckboxPill />);

    const Pill = screen.getByTestId('pill');

    expect(Pill).not.toHaveClass('Pill--active');
  });

  test('should activate pill when click on checkbox', () => {
    render(<CheckboxPill />);

    const Checkbox = screen.getByTestId('Sample-input');
    fireEvent.click(Checkbox);
    const Pill = screen.getByTestId('pill');

    expect(Pill).toHaveClass('Pill--active');
  });
});
