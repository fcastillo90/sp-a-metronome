/**
 * Calculate the bpm in seconds of a song based on the number of beats
 * @param bpm - the bpm to calculate the time for
 * @returns the time in seconds for the given bpm
 */
export const getSeconds = (bpm: number) => {
  return 60 / bpm;
}