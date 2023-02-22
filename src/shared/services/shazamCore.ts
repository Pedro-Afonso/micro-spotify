import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  TCountry,
  IMusic,
  IArtistDetails,
  IMusicDetails,
  ISearch,
  TGenre
} from '@/types'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_X_RAPID_API_KEY)

      return headers
    }
  }),
  endpoints: builder => ({
    getTopCharts: builder.query<IMusic[], void>({
      query: () => '/charts/world'
    }),
    getSongsByGenre: builder.query<IMusic[], TGenre>({
      query: genre => `/charts/genre-world?genre_code=${genre}`
    }),
    getSongDetails: builder.query<IMusicDetails, { songid?: string }>({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`
    }),
    getSongRelated: builder.query<IMusic[], { songid?: string }>({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`
    }),
    getArtistDetails: builder.query<IArtistDetails, { artistid?: string }>({
      query: ({ artistid }) => `/artists/details?artist_id=${artistid}`
    }),
    getSongByCountry: builder.query<IMusic[], TCountry>({
      query: countryCode => `/charts/country?country_code=${countryCode}`
    }),
    getSongsBySearch: builder.query<ISearch, string | undefined>({
      query: searchTerm => `/search/multi?search_type=SONGS&query=${searchTerm}`
    })
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongsBySearchQuery,
  useGetSongsByGenreQuery
} = shazamCoreApi
