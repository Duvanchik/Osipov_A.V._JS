import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentBlockComponent } from './parent-block/parent-block.component';
import { ChildBlockComponent } from './child-block/child-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentBlockComponent,
    ChildBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
