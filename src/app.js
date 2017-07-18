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
import CompanyService from './services/company/company';
import JobService from './services/job/job';
import SkillService from './services/skill/skill';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewMain from './components/view-main/view-main';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import ViewNotifications from './components/view-notifications/view-notifications';
import ViewAddResume from './components/view-add-resume/view-add-resume';
import ViewAddJob from './components/view-add-Job/view-add-Job';
import ViewJob from './components/view-Job/view-Job';
import ViewJobs from  './components/view-Jobs/view-Jobs';
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
    JobService.name,
    SkillService.name,
    RefugeeService.name,
    CompanyService.name,
    MatchingService.name,
    AppContent.name,
    ViewMain.name,
    ViewLogin.name,
    ViewRegister.name,
    ViewAddJob.name,
    ViewNotifications.name,
	  ViewAddResume.name,
	  ViewResume.name,
    ViewAddProfile.name,
    ViewProfile.name,
    ViewMatching.name,
    ViewJob.name,
    ViewJobs.name
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
