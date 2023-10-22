import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sortActive: {
        name: 'popularity A-Z',
        field: 'raiting'
    }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
        state.sortActive = action.payload;
    }
  },
})


export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer