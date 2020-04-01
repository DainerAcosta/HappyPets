// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Componentes
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ]
})
export class ComponentsModule { }
