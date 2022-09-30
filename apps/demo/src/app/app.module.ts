import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {UtilsModule} from "@sandbox-nx/utils";
import {MenuModule} from "@sandbox-nx/menu";
import {InputModule} from "@sandbox-nx/input";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    UtilsModule,
    MenuModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
