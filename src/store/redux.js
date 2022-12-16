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
      console.log("redux add card")
    },
    removeCard: (state, action) => {
      state = state.filter((it) => it.name !== action.payload);
      console.log("redux remove card")
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
      console.log("add filter")
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