import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';

import { UserService } from './services/user.service';
import { ObservableService } from './services/observable.service';
import { ObservableUserService } from './services/observableUser.service';
import { PostsService } from './services/posts.service';
import { TodosService } from './services/todos.service';
import { BookService } from './services/book.service';

import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';
import { BooksComponent } from './components/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    TestObservableComponent,
    ObservableuserComponent,
    PostsComponent,
    TodosComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ObservableService,
    ObservableUserService,
    PostsService,
    TodosService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
