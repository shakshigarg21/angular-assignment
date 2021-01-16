import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlighterDirective } from './assignment2/highlighter.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './assignment1/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
