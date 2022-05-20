import theme from '@/style';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Text from './Text';

describe('Text', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text variant='h1' data-testid="text">test</Text>
      </ThemeProvider>
    )
    expect(screen.queryByText('test')).toBeTruthy()
    expect(screen.queryByTestId('text')?.tagName).toBe('H1')
  });
});