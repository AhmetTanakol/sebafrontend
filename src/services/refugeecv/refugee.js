'use strict';

import angular from 'angular';

//import RefugeeService from './refugee.service';
import RefugeeService from './refugee.local.service';


export default angular.module('RefugeeServiceDefinition', [])
    .service(RefugeeService.name, RefugeeService)