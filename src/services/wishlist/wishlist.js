'use strict';

import angular from 'angular';

import WishlistService from './wishlist.service';


export default angular.module('WishlistServiceDefinition', [])
    .service(WishlistService.name, WishlistService)