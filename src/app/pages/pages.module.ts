// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PagesRouting } from './pages.routing';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    SharedModule,
    PagesRouting
  ]
})
export class PagesModule { }
