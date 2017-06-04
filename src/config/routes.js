'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';

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
}

