import { render, screen } from '@testing-library/react';
import RippleLoader from './RippleLoader';

describe('RippleLoader', () => {
  it('renders without crashing', () => {
    render(
      <RippleLoader data-testid="loader" />
    )
    expect(screen.queryByTestId('loader')).toBeTruthy()
  });
});