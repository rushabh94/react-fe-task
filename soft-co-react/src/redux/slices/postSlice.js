import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);

      if (post) {
        post.likes++;
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
    repost: (state, action) => {
      const postId = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
      }
    },
    savePost: (state, action) => {
      const postId = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.isSaved = true;
      }
    },
    unsavePost: (state, action) => {
      const postId = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.isSaved = false;
      }
    },
  },
});

export const { addPost, likePost, addComment, repost, savePost, unsavePost } =
  postSlice.actions;
export default postSlice.reducer;
