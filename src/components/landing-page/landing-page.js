'use strict';

import angular from 'angular';
import LandingPageComponent from './landing-page.component';

let LandingPage = angular.module('LandingPage', [])
  .component(LandingPageComponent.name, new LandingPageComponent);

export default LandingPage;
