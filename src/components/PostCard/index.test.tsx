import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PostCard } from '.';

describe('PostCard', () => {
  test('Snapshot', () => {
    const snapshot = renderer.create(
      <PostCard
        href={'https://example.com'}
        title={'How to use Testing Library?'}
        tag={'Zenn'}
      />
    );
    expect(snapshot).toMatchSnapshot();
  });

  test('Checking role and text', () => {
    render(
      <PostCard
        href={'https://example.com'}
        title={'How to use Testing Library?'}
        tag={'Zenn'}
      />
    );
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.findByText(/How to use Testing Library\?/)).toBeDefined();
    expect(screen.findByText(/Zenn/)).toBeDefined();
  });

  test('Checking href attribute', () => {
    const { baseElement } = render(
      <PostCard
        href={'https://example.com'}
        title={'How to use Testing Library?'}
        tag={'Zenn'}
      />
    );
    expect(baseElement.getAttribute('https://example.com')).toBeDefined();
  });
});
