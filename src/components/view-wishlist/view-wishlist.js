'use strict';

import angular from 'angular';
import ViewWishlistComponent from './view-wishlist.component';

export default angular.module('ViewWishlist', [])
  .component(ViewWishlistComponent.name, new ViewWishlistComponent);
