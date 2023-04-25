import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  // without LRU
  //   reducers: {
  //     cacheResults: (state, action) => {
  //       //   state = Object.assign(state, action.payload);
  //       return { ...state, ...action.payload };
  //     },
  //   },
  // with LRU => least recent uses
  reducers: {
    cacheResults: (state, action) => {
      const newResults = { ...state, ...action.payload };
      //object.keys it gives the how many key present in Array with key name
      const keys = Object.keys(newResults);

      // If there are more than 100 keys, remove the least recently used key
      if (keys.length > 100) {
        const oldestKey = keys[0];
        const { [oldestKey]: _, ...newState } = newResults;
        return newState;
      }

      return newResults;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
