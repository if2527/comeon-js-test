import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ICategory, ICategoryState } from '../interfaces'
import { apiGetReq } from './api'

const initialState: ICategoryState = {
  categories: [],
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const response: ICategory[] = await apiGetReq('/categories')
    return response
  } catch (error) {
    return []
  }
})

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})

export default categorySlice.reducer
