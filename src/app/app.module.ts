import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportAComponent } from './components/reports/report-a/report-a.component';
import { ReportBComponent } from './components/reports/report-b/report-b.component';
import { UpperComponent } from './components/upper/upper.component';

export const fireBaseConfig = environment.firebaseConfig;

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
    AppRoutingModule,
    //AngularFireModule.initializeApp(fireBaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
