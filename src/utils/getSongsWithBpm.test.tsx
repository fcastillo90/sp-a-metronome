import * as songs from '@/assets/bpm.json'
import getSongsWithBpm from './getSongsWithBpm';


test('getSongsWithBpm should return songs', () => {
  expect(getSongsWithBpm(songs, 72).join('')).toBe("Bohemian Rhapsody,Queen,72Rap God,Eminem,72");
})