
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core'

import { CarouselModule } from 'ngx-owl-carousel-o';
// 3rd step : 
              
// and  

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgbCarouselModule,
    CarouselModule 
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ],
})
export class AboutModule { }