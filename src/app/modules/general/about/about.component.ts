import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  
  
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  
  peliculas:any[]=[
    {name:'',
    img:'https://eicepak.com/wp-content/uploads/2015/11/marca_11.png',
    desc:''},
    {
      name:'',
      img:'https://eicepak.com/wp-content/uploads/2015/11/marca_02.png',
      desc:''
    },
    {
      name:'',
      img:'https://eicepak.com/wp-content/uploads/2015/11/marca_07.png',
      desc:''
    }
    
  ];

  constructor(private _config:NgbCarouselConfig, private readonly http: HttpClient) {

    _config.interval = 400000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;
  }
  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

  
  }




}

