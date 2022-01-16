import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ElOfLlistComponent } from './el-of-llist/el-of-llist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ElOfLlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
