'use strict';

import angular from 'angular';

import ViewNotificiationsComponent from './view-notifications.component';

import ViewWishlist from './../view-wishlist/view-wishlist';
import ViewMatches from './../view-matches/view-matches';

export default angular.module('ViewNotifications', [
        ViewWishlist.name,
        ViewMatches.name
    ])
    .component(ViewNotificiationsComponent.name, new ViewNotificiationsComponent);
