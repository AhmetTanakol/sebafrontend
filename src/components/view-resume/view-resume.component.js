'use strict';

import UserService from './../../services/user/user.service';

import template from './view-resume.template.html';
import './view-resume.style.css';

class ViewResumeComponent {
    constructor(){
        this.controller = ViewResumeComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewResume';
    }


}

class ViewResumeComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

	$onInit() {
		this.noProfilePicture = './../../../dist/assets/no_profile_pict.jpg';
	}
	
    static get $inject(){
        return ['$state', UserService.name];
    }
}


export default ViewResumeComponent;
