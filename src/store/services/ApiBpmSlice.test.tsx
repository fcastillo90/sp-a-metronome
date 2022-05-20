import {bpmApi, useGetSongsByBpmQuery} from './ApiBpmSlice';

test('should return the initial state', () => {
  expect(bpmApi.reducer(undefined, { type: undefined })).toEqual(
    expect.objectContaining(
    {
      config: {
        focused: true,
        keepUnusedDataFor: 60,
        middlewareRegistered: false,
        online: true,
        reducerPath: "bpmApi",
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false
      },
      mutations: {},
      provided: {},
      queries: {},
      subscriptions: {},
    }
  ))
})
