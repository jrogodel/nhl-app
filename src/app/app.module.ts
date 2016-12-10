import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
		PlayersModule,
		TeamsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }