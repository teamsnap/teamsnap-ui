import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AttachmentPill from './AttachmentPill';

describe('AttachmentPill component', () => {
  test('should insert children inside Pill component', () => {
    render(<AttachmentPill>Children</AttachmentPill>);

    const Pill = screen.getByTestId('pill');

    expect(Pill.textContent).toBe('Children');
  });
});
