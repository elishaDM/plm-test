import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportAComponent } from './components/reports/report-a/report-a.component';
import { ReportBComponent } from './components/reports/report-b/report-b.component';
import { UpperComponent } from './components/upper/upper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportAComponent,
    ReportBComponent,
    UpperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
