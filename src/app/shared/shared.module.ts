// Modulos
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
