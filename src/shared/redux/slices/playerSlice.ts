import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMusic } from '../models/IMusic'

interface IPlayerState {
  currentSongs: IMusic[]
  currentIndex: number
  isActive: boolean
  isPlaying: boolean
  activeSong: IMusic | null
  genreListId: string
}

const initialState: IPlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: null,
  genreListId: ''
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<{ song: IMusic }>) => {
      state.activeSong = action.payload.song
      state.isActive = true
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    }
  }
})

export const { setActiveSong, playPause } = playerSlice.actions

export default playerSlice.reducer
