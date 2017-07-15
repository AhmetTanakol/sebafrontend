'use strict';

import angular from 'angular';

import ViewAddProfileComponent from './view-add-profile.component';

export default angular.module('ViewAddProfile', [])
    .component(ViewAddProfileComponent.name, new ViewAddProfileComponent);
