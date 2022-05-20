import theme from '@/style';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import RoundedButton from './RoundedButton';
import userEvent from '@testing-library/user-event'

describe('RoundedButton', () => {
  it('renders without crashing', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn(() => {});
    render(
      <ThemeProvider theme={theme}>
        <RoundedButton
          data-testid="button"
          onClick={handleClick}
        >
          test
        </RoundedButton>
      </ThemeProvider>
    )
    expect(screen.queryByText('test')).toBeTruthy()

    await user.click(screen.getByTestId('button'))
    expect(handleClick.mock.calls.length).toBe(1)
  });
});