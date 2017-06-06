'use strict';

import landingPageTemplate from './landing-page.template.html';
import './landing-page.style.css';

class LandingPageComponent {
  constructor () {
    this.controller = LandingPageController;
    this.template = landingPageTemplate;
  }

  static get name() {
    return 'landingPage';
  }
}

class LandingPageController {
  constructor () {
    this.myInterval = 3000;
    this.noWrapSlides = false;
    this.active = 0;
    this.slides = [
      {
        id: 0,
        text: 'COMPANY INFO',
        image: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg'
      },
      {
        id: 1,
        text: 'COMPANY INFO',
        image: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
      },
      {
        id: 2,
        text: 'COMPANY INFO',
        image: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
      },
      {
        id: 3,
        text: 'COMPANY INFO',
        image: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
      }
    ];
  }
}

export default LandingPageComponent;
