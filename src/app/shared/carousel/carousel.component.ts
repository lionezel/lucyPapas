import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  public responsiveOptions: any[] | undefined;

  @Input() items: any

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible:3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '375px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
  }
}
