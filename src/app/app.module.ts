import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThirdPartyModule } from './third-party.module';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThirdPartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
