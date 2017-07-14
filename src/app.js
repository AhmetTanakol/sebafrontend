'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngAnimate from 'angular-animate';

import 'bootstrap/dist/css/bootstrap.css';

import uiBootstrap from 'angular-ui-bootstrap';

import ngMdIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import moment from 'moment/moment';

import UserService from './services/user/user';
import RefugeeService from './services/refugee/refugee';
import MatchingService from './services/matching/matching';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewMain from './components/view-main/view-main';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import ViewNotifications from './components/view-notifications/view-notifications';
import ViewAddResume from './components/view-add-resume/view-add-resume';
import ViewResume from './components/view-resume/view-resume';
import ViewAddProfile from './components/view-add-profile/view-add-profile';
import ViewProfile from './components/view-profile/view-profile';
import ViewMatching from './components/view-matching/view-matching';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngAnimate,
    ngMdIcons,
    ngMessages,
    uiBootstrap,
    UserService.name,
    RefugeeService.name,
    MatchingService.name,
    AppContent.name,
    ViewMain.name,
    ViewLogin.name,
    ViewRegister.name,
    ViewNotifications.name,
	    ViewAddResume.name,
	    ViewResume.name,
        ViewAddProfile.name,
        ViewProfile.name,
    ViewMatching.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);
app.config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) {
  $mdDateLocaleProvider.formatDate = function(date) {
    return moment(date).format('YYYY-MM-DD');
  };
}]);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;
