'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-profile.template.html';
import './view-add-profile.style.css';

import moment from 'moment/moment';
import _ from 'lodash';

class ViewAddProfileComponent {
    constructor(){
        this.controller = ViewAddProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewAddProfile';
    }

}

class ViewAddProfileComponentController{
    
	constructor ($state) {
		this.$state = $state;
	}

	$onInit() {
				
	}
	
    static get $inject () {
      return ['$state'];
    }

}


export default ViewAddProfileComponent;
