'use strict';

import template from './view-wishlist.template.html';

import './view-wishlist.style.css';

class ViewWishlistComponent {
    constructor () {
      this.controller = ViewWishlistController;
      this.template = template;
    }

    static get name () {
      return 'viewWishlist';
    }
}

class ViewWishlistController {
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

export default ViewWishlistComponent;
