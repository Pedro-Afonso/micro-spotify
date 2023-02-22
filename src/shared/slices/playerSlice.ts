import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMusic } from '../types/IMusic'
import { TGenre } from '../types/TGenre'

interface IPlayerState {
  currentSongs: IMusic[]
  isActive: boolean
  isPlaying: boolean
  activeSong: IMusic | null
  genreListId: TGenre | null
}

const initialState: IPlayerState = {
  currentSongs: [],
  isActive: false,
  isPlaying: false,
  activeSong: null,
  genreListId: null
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
    },

    setGenreListId: (state, action: PayloadAction<TGenre>) => {
      state.genreListId = action.payload
    }
  }
})

export const { setActiveSong, playPause, setGenreListId } = playerSlice.actions

export default playerSlice.reducer
