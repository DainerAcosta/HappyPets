import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from '../components/nav/nav.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule]
})
export class PagesRouting { }
