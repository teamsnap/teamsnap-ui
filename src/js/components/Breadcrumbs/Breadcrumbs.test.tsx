import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs component', () => {
  test('should create a line by each item', () => {
    render(<Breadcrumbs separator="-" breadcrumbs={['Main', 'Menu', 'Item']} />);

    const Main = screen.getByText('Main');
    const Menu = screen.getByText('Menu');
    const Item = screen.getByText('Item');
    const Separators = screen.getAllByText('-');

    expect(Main).not.toBeNull();
    expect(Menu).not.toBeNull();
    expect(Item).not.toBeNull();
    expect(Separators).toHaveLength(2);
  });
});
