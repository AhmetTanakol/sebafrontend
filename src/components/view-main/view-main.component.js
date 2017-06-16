'use strict';

import template from './view-main.template.html';
import './view-main.style.css';

class ViewMainComponent {
  constructor () {
    this.controller = ViewMainComponentController;
    this.template = template;
  }

  static get name() {
    return 'viewMain';
  }
}

class ViewMainComponentController {
  constructor () {
    this.myInterval = 3000;
    this.noWrapSlides = false;
    this.active = 0;
    this.slides = [
      {
        id: 0,
        title: 'Title of Company',
        text: 'some information about the company',
        image: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg'
      },
      {
        id: 1,
        title: 'Title of Company',
        text: 'some information about the company',
        image: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
      },
      {
        id: 2,
        title: 'Title of Company',
        text: 'some information about the company',
        image: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
      },
      {
        id: 3,
        title: 'Title of Company',
        text: 'some information about the company',
        image: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
      }
    ];
  }

}

export default ViewMainComponent;
