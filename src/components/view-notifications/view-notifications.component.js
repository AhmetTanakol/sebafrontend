'use strict';

import UserService from './../../services/user/user.service';

import template from './view-notifications.template.html';

import './view-notifications.style.css';

class ViewNotificationsComponent {
    constructor () {
      this.controller = ViewNotificationsController;
      this.template = template;
    }

    static get name () {
      return 'viewNotifications';
    }
}

class ViewNotificationsController {
    constructor ($state, UserService) {
		this.$state = $state;
		this.UserService = UserService;	  
    }
	
	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			
			// company or refugee
			this.loginAs = this.currentUser.type;
		}
	}

    static get $inject() {
		return ['$state', UserService.name];
	}
}

export default ViewNotificationsComponent;
