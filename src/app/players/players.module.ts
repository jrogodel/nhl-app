import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerListRoutingModule } from './players.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PlayerListRoutingModule
  ],
  declarations: [ PlayerListComponent ],
  providers: [],
})
export class PlayersModule { }
