import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { shazamCoreApi } from './services/shazamCore'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
