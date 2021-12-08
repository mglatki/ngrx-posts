import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PostActionTypes } from '../actions/posts.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActionTypes.GET_POSTS),
      mergeMap(() =>
        this.service.getPosts().pipe(
          map((data) => ({
            type: PostActionTypes.GET_POSTS_SUCCESS,
            payload: data,
          })),
          catchError((error) =>
            of({
              type: PostActionTypes.GET_POSTS_FAIL,
              payload: error,
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PostsService) {}
}
