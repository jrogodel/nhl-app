import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamListRoutingModule } from './teams.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TeamListRoutingModule
  ],
  declarations: [ TeamListComponent ],
  providers: [],
})
export class TeamsModule { }
