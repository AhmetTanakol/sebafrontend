'use strict';

import angular from 'angular';

import CompanyService from './company.service';


export default angular.module('CompanyServiceDefinition', [])
    .service(CompanyService.name, CompanyService)