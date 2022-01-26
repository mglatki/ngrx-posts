import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/AppState';

export const selectPosts = createFeatureSelector<AppState>(`appState`);

export const selectCurrentPosts = createSelector(selectPosts, (appState) => {
  return appState.posts;
});
