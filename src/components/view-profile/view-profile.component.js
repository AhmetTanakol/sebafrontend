'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';
import './view-profile.style.css';

class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewProfile';
    }


}

class ViewProfileComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

	$onInit() {
	}
	
    static get $inject(){
        return ['$state', UserService.name];
    }
}


export default ViewProfileComponent;
