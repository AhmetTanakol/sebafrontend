'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import NotificationComponent from './../components/view-notifications/view-notifications.component';
import AddResumeComponent from './../components/view-add-resume/view-add-resume.component';
import ResumeComponent from './../components/view-resume/view-resume.component';

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function config ($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
          url: '/login',
          component: LoginComponent.name,
        })
        .state('register', {
          url: '/register',
          component: RegisterComponent.name,
        })
        .state('notifications', {
          url: '/notification',
          component: NotificationComponent.name,
        })
		.state('addResume', {
          url: '/add-resume',
          component: AddResumeComponent.name,
        })
		.state('viewResume', {
          url: '/view-resume',
          component: ResumeComponent.name,
        })
}

