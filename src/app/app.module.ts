import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';

import { UserService } from './services/user.service';
import { ObservableService } from './services/observable.service';
import { ObservableUserService } from './services/observableUser.service';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    TestObservableComponent,
    ObservableuserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    ObservableService,
    ObservableUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
