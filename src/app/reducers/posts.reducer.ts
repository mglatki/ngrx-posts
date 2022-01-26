import {
  getPosts,
  getPostsSuccess,
  getPostsFail,
} from '../actions/posts.actions';
import { createReducer, on } from '@ngrx/store';
import { AppState } from '../models/AppState';

const initialState: AppState = {
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(getPosts, (state) => {
    return { ...state };
  }),
  on(getPostsSuccess, (state, action) => {
    return { ...state, posts: action.payload };
  }),
  on(getPostsFail, (state, action) => {
    return action.payload;
  })
);
