import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Combobox from './Combobox';

const items = [
  {
    label: '2006',
    value: '2006',
  },
  {
    label: '2007',
    value: '2007',
  },
];

describe('Combobox component', () => {
  test('should use the buttonLabel prop to set button text', () => {
    render(<Combobox name="test" buttonLabel="Click me" items={items} />);

    const Button = screen.getByTestId('comboboxButton');

    expect(Button.innerHTML).toBe('Click me');
  });

  test('should start with hidden flyout', () => {
    render(<Combobox name="test" buttonLabel="Click me" items={items} />);

    const Flyout = screen.queryByTestId('flyout');

    expect(Flyout).toBeNull();
  });

  test.skip('should open flyout when click on button', () => {
    render(<Combobox name="test" buttonLabel="Click me" items={items} />);

    const Button = screen.getByTestId('comboboxButton');
    fireEvent.click(Button);
    const Flyout = screen.queryByTestId('flyout');

    expect(Flyout).not.toBeNull();
  });
});
