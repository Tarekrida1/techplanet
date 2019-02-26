import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainCarousel = [
    {
      img: '../../../assets/img/slider/1.svg',
      mainHead: 'Time is running',
      secondHead: 'Get insights spend',
      desc: 'Lorem ipsum dolor sit amet, iandae maxime iure sequi odio itaque dolores aliquid, quos cum soluta inventore eveniet magni.'
    },
    {
      img: '../../../assets/img/slider/2.svg',
      mainHead: 'Find Pattern',
      secondHead: 'Look for patterns in information',
      desc: 'Lorem ipsum dolor sit amet, iandae maxime iure sequi odio itaque dolores aliquid, quos cum soluta inventore eveniet magni.'
    },
    {
      img: '../../../assets/img/slider/3.svg',
      mainHead: 'Learning is in Your Head',
      secondHead: 'Having beautiful notes and a perfectly highlighted',
      desc: 'Lorem ipsum dolor sit amet, iandae maxime iure sequi odio itaque dolores aliquid, quos cum soluta inventore eveniet magni.'
    },
    {
      img: '../../../assets/img/slider/2.svg',
      mainHead: 'Learning is in Your Head',
      secondHead: 'Having beautiful notes and a perfectly highlighted',
      desc: 'Lorem ipsum dolor sit amet, iandae maxime iure sequi odio itaque dolores aliquid, quos cum soluta inventore eveniet magni.'
    }

  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 100000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}
