import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './reducers/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/effects.posts';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, NavigationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: postsReducer }, {}),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
