'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-resume.template.html';
import './view-add-resume.style.css';


class ViewAddResumeComponent {
    constructor(){
        this.controller = ViewAddResumeComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewAddResume';
    }

}

class ViewAddResumeComponentController{
    
	constructor ($state) {
		this.$state = $state;		
    }
	
	$onInit() {
		this.resume = {};
	  
		this.resume.birthdate = new Date();

		this.resume.minDate = new Date(
			this.myDate.getFullYear() - 30,
			this.myDate.getMonth() - 2,
			this.myDate.getDate()
		);

		this.resume.maxDate = new Date(
			this.myDate.getFullYear(),
			this.myDate.getMonth(),
			this.myDate.getDate()
		);
    }
	
    static get $inject () {
      return ['$state'];
    }

}


export default ViewAddResumeComponent;
