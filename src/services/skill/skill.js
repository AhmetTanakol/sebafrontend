'use strict';

import angular from 'angular';

import SkillService from './skill.service';


export default angular.module('SkillServiceDefinition', [])
    .service(SkillService.name, SkillService);
