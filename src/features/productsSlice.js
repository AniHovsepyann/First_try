import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filter: 'all',
  data: [
    {
      id: 1,
      image: './soap.jpg',
      desc: 'Morning Herbal Soap',
      for: 'MakeUP'
    },
    {
      id: 2,
      image: './bath.jpg',
      desc: 'Refreshing Cleanser Gel',
      for: 'Bath'
    },
    {
      id: 3,
      image: './bodyOil.jpg',
      desc: 'Skincare',
      for: 'Skincare'
    },
    {
      id: 4,
      image: './hair.jpg',
      desc: 'Hair',
      for: 'Hair'
    }
  ]
}


const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload
    }
  },
  selectors: {
    getAll: (state) => {
      return state.filter === 'all'
        ? state.data
        : state.data.filter(elm => elm.for === state.filter
        )
    }
  }
})

export default productsSlice.reducer

export const { getAll } = productsSlice.selectors
export const { changeFilter } = productsSlice.actions

