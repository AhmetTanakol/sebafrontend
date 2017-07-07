'use strict';

import angular from 'angular';

import MatchingService from './matching.service';


export default angular.module('MatchingServiceDefinition', [])
    .service(MatchingService.name, MatchingService);
