'use strict';

import angular from 'angular';

import ViewJobComponent from './view-Job.component';

export default angular.module('ViewJob', [])
    .component(ViewJobComponent.name, new ViewJobComponent);
