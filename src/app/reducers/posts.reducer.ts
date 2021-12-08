import {
  getPosts,
  getPostsSuccess,
  getPostsFail,
} from '../actions/posts.actions';
import { Post } from '../models/posts';
import { createReducer, on } from '@ngrx/store';

const initialState: ReadonlyArray<Post> = [];

export const postsReducer = createReducer(
  initialState,
  on(getPosts, (state) => {
    return [...state];
  }),
  on(getPostsSuccess, (state, action) => {
    //   let arr = new Array();

    //   for (let i = 0; i < action.payload.length; i += 6) {
    //     const v = action.payload.slice(i, i + 6);
    //     // console.log(v);
    //     arr.push(v);
    //   }

    //   return [...arr];

    return action.payload;
  }),
  on(getPostsFail, (state, action) => {
    return action.payload;
  })
);
