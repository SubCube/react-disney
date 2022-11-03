import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DisneyCharacter } from '../models/disney'

interface DisneyState {
  favorites: Array<DisneyCharacter>
}

const initialState: DisneyState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<DisneyCharacter>) {
      state.favorites.push(action.payload)
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(item => item._id !== action.payload)
    }
  }
})

export const favoritesActions = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
