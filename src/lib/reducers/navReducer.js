import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clicked: '',
};

export const navClickSlice = createSlice({
    name: "clicked",
    initialState,
    reducers: {
      setNavClick: (state, action) => {
        state.clicked = action.payload;
      }
    }
  });
  
export const { setNavClick } = navClickSlice.actions;
export default navClickSlice.reducer;