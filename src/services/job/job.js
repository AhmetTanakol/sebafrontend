'use strict';

import angular from 'angular';

import JobService from './job.service';


export default angular.module('JobServiceDefinition', [])
    .service(JobService.name, JobService);
