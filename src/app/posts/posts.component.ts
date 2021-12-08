import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../actions/posts.actions';
import { selectCurrentPosts } from '../selectors/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(selectCurrentPosts);
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.posts = this.postsService.getPosts();
    this.store.dispatch(getPosts());
  }
}
