import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import withLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe('WithLogging HOC', () => {
  afterEach(cleanup);

  it('should render a heading element with the correct text', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const WrappedMockApp = withLogging(MockApp);

    render(<WrappedMockApp />);

    const title = screen.getByRole('heading', {
      level: 1,
      name: /Hello from Mock App Component/i,
    });

    expect(title).toBeInTheDocument();

    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');

    cleanup();

    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');

    consoleSpy.mockRestore();
  });
});
