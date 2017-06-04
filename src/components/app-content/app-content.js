'use strict';

import angular from 'angular';

import AppHeader from './../app-header/app-header';
import AppFooter from './../app-footer/app-footer';
import LandingPage from './../landing-page/landing-page';

import AppContentComponent from './app-content.component';


export default angular.module('AppView', [
        AppHeader.name,
        AppFooter.name,
        LandingPage.name
    ])
    .component(AppContentComponent.name, new AppContentComponent);
