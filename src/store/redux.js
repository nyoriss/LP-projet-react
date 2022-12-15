import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const composantFavorisSlice = createSlice({
  name: "ComposantFavoris",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeCard: (state, action) => {
      state = state.filter((it) => it.name !== action.payload);
      return state;
    },
  },
});

export const { addCard, removeCard } = composantFavorisSlice.actions;

const filterResult = createSlice({
  name: "filters",
  initialState: [""],
  reducers: {
    addFilter: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { addFilter } = filterResult.actions;

export const store = configureStore({
  reducer: {
    ComposantFavoris: composantFavorisSlice.reducer,
    filters: filterResult.reducer,
  },
});