import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IGame, IGamesState } from '../interfaces'
import { apiGetReq } from './api'

const initialState: IGamesState = {
  games: [],
  open: '',
}

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  try {
    const response: IGame[] = await apiGetReq('/games')
    return response
  } catch (error) {
    return []
  }
})

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    openGame: (state, action) => {
      state.open = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload
    })
  },
})

export const { openGame } = gamesSlice.actions

export default gamesSlice.reducer
