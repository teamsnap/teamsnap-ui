import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('should call onClick function when button clicked', () => {
    const onClick = jest.fn();
    render(
      <Button className="my-button" onClick={onClick}>
        Test
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toBeCalled();
  });
});
