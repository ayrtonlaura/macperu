import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { NgbPaginationModule, NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../general/about/about.component';
@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    NgbCarouselModule,
    
  ],
  providers: [
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
