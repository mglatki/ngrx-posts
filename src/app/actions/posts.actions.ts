import { createAction, props } from '@ngrx/store';
import { Post } from '../models/posts';

export enum PostActionTypes {
  GET_POSTS = '[POST] GetPosts',
  GET_POSTS_SUCCESS = '[POST] GetPosts Success',
  GET_POSTS_FAIL = '[POST] GetPosts Fail',
}

export const getPosts = createAction(PostActionTypes.GET_POSTS);
export const getPostsSuccess = createAction(
  PostActionTypes.GET_POSTS_SUCCESS,
  props<{ payload: Post[] }>()
);
export const getPostsFail = createAction(
  PostActionTypes.GET_POSTS_FAIL,
  props<{ payload: any }>()
);
