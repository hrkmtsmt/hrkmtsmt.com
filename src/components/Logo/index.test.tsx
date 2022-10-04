import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Logo } from '.';

describe('Logo', () => {
  test('Snapshot', () => {
    const snapshot = renderer.create(
      <Logo size={'40px'} color={'primary-400'} />
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('Checking color className', () => {
    const { baseElement } = render(
      <Logo size={'40px'} color={'primary-400'} />
    );
    expect(baseElement.querySelector('path')).toHaveClass('fill-primary-400');
  });

  test('Checking width and height attributes', () => {
    const { baseElement } = render(
      <Logo size={'40px'} color={'primary-400'} />
    );
    expect(baseElement.querySelector('svg')).toHaveAttribute('width', '40px');
    expect(baseElement.querySelector('svg')).toHaveAttribute('height', '40px');
  });
});
