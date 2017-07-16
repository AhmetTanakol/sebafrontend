'use strict';

import angular from 'angular';

import ViewJobsComponent from './view-Jobs.component';

export default angular.module('ViewJobs', [])
    .component(ViewJobsComponent.name, new ViewJobsComponent);
