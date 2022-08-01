import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { PostCard } from '.';

describe('PostCard', () => {
  it('Snapshot', () => {
    const snapshot = renderer.create(
      <PostCard
        href={'https://example.com'}
        title={'How to use Testing Library?'}
        tag={'Zenn'}
      />
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('Checking role and text', () => {
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

  it('Checking href attribute', () => {
    const { container } = render(
      <PostCard
        href={'https://example.com'}
        title={'How to use Testing Library?'}
        tag={'Zenn'}
      />
    );
    expect(container.getAttribute('https://example.com')).toBeDefined();
  });
});
