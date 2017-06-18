'use strict';

import angular from 'angular';

import ViewResumeComponent from './view-resume.component';


export default angular.module('ViewResume', [])
    .component(ViewResumeComponent.name, new ViewResumeComponent);
