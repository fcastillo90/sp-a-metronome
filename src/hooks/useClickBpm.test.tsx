jest.useFakeTimers();
import { act, renderHook } from '@testing-library/react';
import useClickBpm from './useClickBpm';

const TEMPO = 0
const SET_TEMPO = 1
const HANDLE_CLICK = 2

describe('useClickBpm', () => {
  it('Should correctly set tempo', async () => {
    const {result} = renderHook(() => useClickBpm())

    act(() => {
      result.current[SET_TEMPO](72)
    })
    expect(result.current[TEMPO]).toBe(72)

    // one click does not change tempo
    act(result.current[HANDLE_CLICK])
    expect(result.current[TEMPO]).toBe(72)

    // wait 1 second for the second click
    jest.advanceTimersByTime(1000);
    act(result.current[HANDLE_CLICK])
    // tempo should be 60 bpm
    expect(result.current[TEMPO]).toBe(60)

    // wait 6 second, then click, tempo should not change
    act(() => {
      jest.advanceTimersByTime(6000);
    })
    act(result.current[HANDLE_CLICK])
    // tempo should be 60 bpm
    expect(result.current[TEMPO]).toBe(60)
  });
});