// src/reducers/likesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {},
  reducers: {
    likeStory: (state, action) => {
      const storyId = action.payload;
      state[storyId] = (state[storyId] || 0) + 1;
    },
  },
});

export const { likeStory } = likesSlice.actions;
export default likesSlice.reducer;
