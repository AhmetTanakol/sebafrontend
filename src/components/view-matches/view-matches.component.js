'use strict';

import template from './view-matches.template.html';

import './view-matches.style.css';

class ViewMatchesComponent {
    constructor () {
      this.controller = ViewMatchesController;
      this.template = template;
    }

    static get name () {
      return 'viewMatches';
    }
}

class ViewMatchesController {
  constructor () {
    this.companies = [
      {
        name: 'Google',
        description: 'Hello Google',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Microsoft',
        description: 'Hello Microsoft',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Airbnb',
        description: 'Hello Airbnb',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Spotify',
        description: 'Hello Spotify',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      }
    ];
  }
}

export default ViewMatchesComponent;
