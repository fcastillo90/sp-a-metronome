import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout data-testid="layout">test</Layout>)
    expect(screen.queryByTestId('layout')).toBeTruthy()
    expect(screen.queryByText('test')).toBeTruthy()
  });
});