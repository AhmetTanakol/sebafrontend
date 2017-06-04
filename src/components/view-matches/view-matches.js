'use strict';

import angular from 'angular';
import ViewMatchesComponent from './view-matches.component';

export default angular.module('ViewMatches', [])
  .component(ViewMatchesComponent.name, new ViewMatchesComponent);
