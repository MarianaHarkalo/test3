import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WalkInClinicComponent } from './pages/walk-in-clinic/walk-in-clinic.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home',component:HomeComponent},
  {path:'WalkInClinic',component:WalkInClinicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
