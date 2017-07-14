'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-job.template.html';
import './view-add-job.style.css';
import UserService from './../../services/user/user.service';
import JobService from './../../services/job/job.service';

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
    
	constructor ($state, $http,$window,API_URL) {
	    this.job ={};
	    this.UserService = UserService;
	    this.JobService = JobService;
		this.$state = $state;
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;
	}

  	removeSkill (selectedItem) {
		var index = this.job.skills.indexOf(selectedItem);
		this.job.skills.splice(index, 1);
  	}

	addSkill () {
		this.job.skills.push({
			type: this.skill.type,
			power: this.skill.power,
		});
		this.skill = {};
        this.skill.power = 1;
	}

	submit () {
	    let user = UserService.getCurrentUser();
		/*let jobInfo = {
            user: user['_id'],
            title:this.job.jobTitle,
            description: this.job.jobDescription,
            startDate: this.job.startDate,
            endDate: this.job.endDate,
            skills: this.job.skills
		};*/
        this.job['user'] = user['_id'];
        this.JobService.create(this.job).then(data => {
            //todo go to Job-View
        })
		return this.$http.post(`${ this.API_URL }/job/add`, jobInfo);
	}

	$onInit(){
		this.job.skills = [];

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
      return ['$state','$http', '$window','API_URL'];
    }

}


export default ViewAddJobComponent;
