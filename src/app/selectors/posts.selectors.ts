import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../models/posts';

export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>(`posts`);

export const selectCurrentPosts = createSelector(selectPosts, (posts) => {
  return posts;
});
