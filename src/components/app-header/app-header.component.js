
'use strict';

import UserService from './../../services/user/user.service';

import template from './app-header.template.html';

import './app-header.style.css';

class AppHeaderComponent {
    constructor(){
        this.controller = AppHeaderComponentController;
        this.template = template;

    }

    static get name() {
        return 'appHeader';
    }


}

class AppHeaderComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;

    }

    isAuthenticated(){
        return this.UserService.isAuthenticated();
    }

    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }

    main(){
        this.$state.go('main',{});
    }

    login(){
        this.$state.go('login',{});
    }

    register(){
		this.$state.go('register',{});
    }

    getNotifications () {
		this.$state.go('notifications',{});
    }

    logout(){
        this.UserService.logout();
        this.$state.go('main',{});
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

    addResume() {
      this.$state.go('addResume',{});
    }

    viewResume() {
      this.$state.go('viewResume',{});
    }

    makeSearch() {
      this.$state.go('viewMatching', {});
    }

    addJob() {
        this.$state.go('jobAdd', {});
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default AppHeaderComponent;
