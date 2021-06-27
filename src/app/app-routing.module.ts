import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportAComponent } from './components/reports/report-a/report-a.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'דוח א',
    component: ReportAComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
