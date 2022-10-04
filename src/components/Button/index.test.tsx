import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Button } from '.';

describe('Button', () => {
  test('Snapshot', () => {
    const snapshot = renderer.create(<Button color={'primary'}>Button</Button>);
    expect(snapshot).toMatchSnapshot();
  });

  test('Checking role and text', () => {
    render(<Button color={'primary'}>Button</Button>);
    expect(screen.getByRole('button', { name: /Button/ })).toBeDefined();
  });

  test('Checking color primary', () => {
    const { baseElement } = render(<Button color={'primary'}>Button</Button>);
    expect(baseElement.querySelector('button')).toHaveClass('bg-primary-400');
  });

  test('Checking color secondary', () => {
    const { baseElement } = render(<Button color={'secondary'}>Button</Button>);
    expect(baseElement.querySelector('button')).toHaveClass('bg-primary-200');
  });
});
