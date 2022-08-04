import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ILoginParams, IloginResponse, ILogoutParams, IUserState } from '../interfaces'
import { apiPostReq } from './api'

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: '',
}

export const login = createAsyncThunk(
  'user/login',
  async (params: ILoginParams, { rejectWithValue }) => {
    try {
      const response: IloginResponse = await apiPostReq('/login', params)
      return {
        ...response.player,
        username: params.username,
      }
    } catch (error) {
      return rejectWithValue(
        error instanceof AxiosError ? error?.response?.data.error : 'Server error'
      )
    }
  }
)

export const logout = createAsyncThunk(
  'user/logout',
  async (params: ILogoutParams, { rejectWithValue }) => {
    try {
      const response = await apiPostReq('/logout', params)
      return response
    } catch (error) {
      return rejectWithValue(
        error instanceof AxiosError ? error?.response?.data.error : 'Server error'
      )
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLoading = false
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null
      state.isLoading = false
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export default userSlice.reducer
