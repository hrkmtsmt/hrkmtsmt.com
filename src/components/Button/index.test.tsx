import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Button } from '.';

describe('Button', () => {
  it('Snapshot', () => {
    const snapshot = renderer.create(<Button color={'primary'}>Button</Button>);
    expect(snapshot).toMatchSnapshot();
  });

  it('Checking role and text', () => {
    render(<Button color={'primary'}>Button</Button>);
    expect(screen.getByRole('button', { name: /Button/ })).toBeDefined();
  });

  it('Checking color primary', () => {
    const { container } = render(<Button color={'primary'}>Button</Button>);
    expect(container.querySelectorAll('bg-primary')).toBeDefined();
  });

  it('Checking color secondary', () => {
    const { container } = render(<Button color={'secondary'}>Button</Button>);
    expect(container.querySelectorAll('bg-secondary')).toBeDefined();
  });
});
