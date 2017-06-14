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
	  
		this.resume.myDate = new Date();

		this.resume.minDate = new Date(
			this.resume.myDate.getFullYear() - 70,
			this.resume.myDate.getMonth() - 2,
			this.resume.myDate.getDate()
		);

		this.resume.maxDate = new Date(
			this.resume.myDate.getFullYear(),
			this.resume.myDate.getMonth(),
			this.resume.myDate.getDate()
		);
    }
	
    static get $inject () {
      return ['$state'];
    }

}


export default ViewAddResumeComponent;
