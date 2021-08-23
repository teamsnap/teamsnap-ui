import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup component', () => {
  test('should render a Button for each item passed as prop', () => {
    const buttons = [
      { children: 'Button1', onClick: () => {} },
      { children: 'Button2', onClick: () => {} },
    ];

    render(<ButtonGroup buttons={buttons} />);

    const Button1 = screen.getByText('Button1');
    const Button2 = screen.getByText('Button1');

    expect(Button1).not.toBeNull();
    expect(Button2).not.toBeNull();
  });
});
