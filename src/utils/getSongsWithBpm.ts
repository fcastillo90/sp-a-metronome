type Song = (string | number)[]

/**
 * Get Songs with BPM
 * @param songs - the songs to search in
 * @param bpm - the bpm to search for
 * @returns the array of songs with the bpm
 */
export const getSongsWithBpm = (songs: Song[], bpm: number) => songs.filter((song) => song[2] === bpm);

export default getSongsWithBpm