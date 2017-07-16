'use strict';

import angular from 'angular';

import ViewMatchingComponent from './view-matching.component';

export default angular.module('ViewMatching', [])
    .component(ViewMatchingComponent.name, new ViewMatchingComponent);