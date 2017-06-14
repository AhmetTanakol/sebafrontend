'use strict';

import angular from 'angular';

import ViewAddResumeComponent from './view-add-resume.component';


export default angular.module('ViewAddResume', [])
    .component(ViewAddResumeComponent.name, new ViewAddResumeComponent);
