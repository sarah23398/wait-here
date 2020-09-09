import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { WaitingListService } from "./waiting-list.service";

@NgModule({
  declarations: [
    AppComponent,
    WaitingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [WaitingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
