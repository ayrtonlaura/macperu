import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosComponent } from './nosotros.component';
import { NosotrosRoutingModule } from './nosotros-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ],
  exports: [
    NosotrosComponent
  ],
  declarations: [
    NosotrosComponent
  ],
  providers: [
  ],
})
export class NosotrosModule { }