import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]> | any;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
