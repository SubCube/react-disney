import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { CharactersListResponse } from '../models/disney'

export const disneyApi = createApi({
  reducerPath: 'disney/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.disneyapi.dev/'
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    disneyItems: build.query<CharactersListResponse, void>({
      query: () => ({
        url: 'characters'
      })
    })
  })
})

export const { useDisneyItemsQuery } = disneyApi
