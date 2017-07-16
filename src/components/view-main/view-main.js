'use strict';

import angular from 'angular';
import ViewMainComponent from './view-main.component';

let viewMain = angular.module('ViewMain', [])
  .component(ViewMainComponent.name, new ViewMainComponent);

export default viewMain;