import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { shazamCoreApi } from './services/shazamCore'
import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
