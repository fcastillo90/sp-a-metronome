import { BpmAPI } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bpmApi = createApi({
  reducerPath: 'bpmApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.VITE_BPM_WEB_BASE_URL,
  }),
  endpoints: (builder) => ({
    getSongsByBpm: builder.query<BpmAPI, number>({
      query: (bpm) => `/tempo/?api_key=${process.env.VITE_BPM_WEB_API_KEY}&bpm=${bpm}&limit=10`,
    }),
  }),
})

export const { 
  useGetSongsByBpmQuery,
} = bpmApi