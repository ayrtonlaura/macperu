import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example-modal',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class TutorialComponent implements OnInit{
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  peliculas:any[]=[
    {name:'Equipos que potencian tu producción',
    img:'http://www.macperu.com.pe/images/plantillahome-1.jpg',
    desc:''},
    {
      name:'Marcas reconocidas',
      img:'http://www.macperu.com.pe/images/plantillahome-finalpuzzle.jpg',
      desc:''
    },
    {
      name:'Servicio post venta y garantía',
      img:'http://www.macperu.com.pe/images/plantillahome-finalpuzzle2.jpg',
      desc:''
    }
    
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object, private _config:NgbCarouselConfig) {
    _config.interval = 5000000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;

  }

  ngOnInit() {
  }
}
