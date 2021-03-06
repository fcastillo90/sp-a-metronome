import theme from '@/style';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn(() => {});
    render(
      <ThemeProvider theme={theme}>
        <Button 
          data-testid="button"
          onClick={handleClick}
        >
          test
        </Button>
      </ThemeProvider>
    )
    expect(screen.queryByText('test')).toBeTruthy()

    await user.click(screen.getByTestId('button'))
    expect(handleClick.mock.calls.length).toBe(1)
  });
});