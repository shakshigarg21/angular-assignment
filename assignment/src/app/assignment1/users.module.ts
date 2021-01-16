import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HighlighterDirective } from '../assignment2/highlighter.directive';

@NgModule({
  
    declarations:[UsersComponent,HighlighterDirective],
    imports: [CommonModule]

})
export class UsersModule{}