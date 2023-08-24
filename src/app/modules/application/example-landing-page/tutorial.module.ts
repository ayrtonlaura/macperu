import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { NgbPaginationModule, NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../general/about/about.component';
import { AboutModule } from '../../general/about/about.module';
import { ContactModule } from '../../general/contact/contact.module';
import { NosotrosModule } from '../../general/nosotros/nosotros.module';
@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    NgbCarouselModule,
    AboutModule,
    ContactModule,
    NosotrosModule
  ],
  providers: [
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
