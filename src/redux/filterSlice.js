import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {filterStr: ''},
  reducers: {
    setFilter: {
      reducer(state, action) {                
        //console.log("state.filter.filterStr", state.filter.filterStr);
        state.filterStr = action.payload;
        //return state = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
