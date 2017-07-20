'use strict';

import angular from 'angular';

import ViewEditJobComponent from './view-edit-Job.component';

export default angular.module('ViewEditJob', [])
    .component(ViewEditJobComponent.name, new ViewEditJobComponent);
