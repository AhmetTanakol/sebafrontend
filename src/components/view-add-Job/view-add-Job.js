'use strict';

import angular from 'angular';

import ViewAddJobComponent from './view-add-Job.component';

export default angular.module('ViewAddJob', [])
    .component(ViewAddJobComponent.name, new ViewAddJobComponent);
