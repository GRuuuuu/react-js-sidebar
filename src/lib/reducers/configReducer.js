import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const config = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});
export const { setTheme } = config.actions;
export default config.reducer;