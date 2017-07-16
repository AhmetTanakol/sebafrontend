'use strict';

import angular from 'angular';

import RefugeeService from './refugee.service';


export default angular.module('RefugeeServiceDefinition', [])
    .service(RefugeeService.name, RefugeeService)