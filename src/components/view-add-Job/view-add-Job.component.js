'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-job.template.html';
import './view-add-job.style.css';

import moment from 'moment/moment';
import _ from 'lodash';

class ViewAddJobComponent {
    constructor(){
        this.controller = ViewAddJobComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewAddJob';
    }

}

class ViewAddJobComponentController{
    
	constructor ($state) {
		this.$state = $state;
	}

  	removeSkill (selectedItem) {
		var index = this.skills.indexOf(selectedItem);
		this.skills.splice(index, 1);
  	}

	addSkill () {
		this.skills.push({
			type: this.skill.type,
			power: this.skill.power,
		});
		this.skill = {};
        this.skill.power = 1;
	}

	submit () {
		let jobInfo = {
            user:,
            title:this.job.jobTitle,
            description: this.job.jobDescription,
            startDate: this.job.startDate,
            endDate: this.job.endDate,
            skills: this.skills

		}
	}

	$onInit(){
		this.skills = [];

		this.skill = {};

		this.skill.power = 1;

		var currentDate = new Date();
		this.maxStartDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 1,
			currentDate.getDate()
		);
		this.maxEndDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate()
		);
	}
	
    static get $inject () {
      return ['$state'];
    }

}


export default ViewAddJobComponent;
