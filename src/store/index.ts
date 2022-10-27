import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { disneyApi } from './disney.api'

export const store = configureStore({
  reducer: {
    [disneyApi.reducerPath]: disneyApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(disneyApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
