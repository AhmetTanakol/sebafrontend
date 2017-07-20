
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
	
	isUserRefugee() {
		this.currentUser = this.UserService.getCurrentUser();
		if (this.currentUser.type === 'refugee') {
		  return true;
		}
		return false;
	}
	
	isUserCompany() {
		this.currentUser = this.UserService.getCurrentUser();
		if (this.currentUser.type === 'company') {
		  return true;
		}
		return false;
	}

    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.email;
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
	  this.currentUser = this.UserService.getCurrentUser();
      this.$state.go('viewResume',{resumeId:this.currentUser.refugee});
    }

    addProfile() {
      this.$state.go('addProfile',{});
    }

    viewProfile() {
      this.$state.go('viewProfile',{});
    }

    makeSearch() {
      this.$state.go('viewMatching', {});
    }

    viewJobs() {
        if (this.UserService.isAuthenticated()) {
            //let _id = this.job['_id'];
            this.userid = this.UserService.getCurrentUser()['_id']
            this.$state.go('jobs',{userid: this.userid});
        } else {
            this.$state.go('login',{});
        }
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default AppHeaderComponent;
