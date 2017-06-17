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

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import ViewNotifications from './components/view-notifications/view-notifications';
import ViewAddResume from './components/view-add-resume/view-add-resume';
import ViewResume from './components/view-resume/view-resume';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngAnimate,
    ngMdIcons,
    ngMessages,
    uiBootstrap,
    UserService.name,
    AppContent.name,
    ViewLogin.name,
    ViewRegister.name,
    ViewNotifications.name,
	  ViewAddResume.name,
	  ViewResume.name
]);

app.constant('API_URL', 'http://accd1eb4.ngrok.io/api');
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
