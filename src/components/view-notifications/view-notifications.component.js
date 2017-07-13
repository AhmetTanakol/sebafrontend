'use strict';

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
    constructor ($state) {
      this.$state = $state;
	  
	  // company or refugee
	  this.loginAs = 'company';
	  
    }

    static get $inject () {
      return ['$state'];
    }
}

export default ViewNotificationsComponent;
