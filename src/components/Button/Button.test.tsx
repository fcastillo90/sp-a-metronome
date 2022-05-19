import theme from '@/style';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>test</Button>
      </ThemeProvider>
    )
    expect(screen.queryByText('test')).toBeTruthy()
  });
});