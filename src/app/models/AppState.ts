import { Post } from './posts';

export interface AppState {
  posts: ReadonlyArray<Post>;
}
