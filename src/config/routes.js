'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import NotificationComponent from './../components/view-notifications/view-notifications.component';
import MainComponent from './../components/view-main/view-main.component'

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function config ($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            url: '/main',
            component: MainComponent.name,
        })
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
}

