import { bindActionCreators } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { favoritesActions } from '../store/favorites.slice'

const actions = {
  ...favoritesActions
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
