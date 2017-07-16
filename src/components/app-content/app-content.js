'use strict';

import angular from 'angular';

import AppHeader from './../app-header/app-header';
import AppFooter from './../app-footer/app-footer';
import ViewMain from './../view-main/view-main';

import AppContentComponent from './app-content.component';


export default angular.module('AppView', [
        AppHeader.name,
        AppFooter.name,
        ViewMain.name
    ])
    .component(AppContentComponent.name, new AppContentComponent);
