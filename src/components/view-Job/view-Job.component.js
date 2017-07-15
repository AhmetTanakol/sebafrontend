'use strict';

import UserService from './../../services/user/user.service';

import template from './view-job.template.html';
import './view-job.style.css';
import JobService from './../../services/job/job.service';


class ViewAddJobComponent {
    constructor(){
        this.controller = ViewAddJobComponentController;
        this.template = template;
        this.bindings = {
        	job: '<',
		}
    }

    static get name() {
        return 'viewJob';
    }

}

class ViewAddJobComponentController{
    
	constructor ($state ,UserService, JobService) {
	    this.job ={};
        this.UserService = UserService;
	    this.JobService = JobService;
		this.$state = $state;
	}

  	removeSkill (selectedItem) {
		let index = this.job.skills.indexOf(selectedItem);
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
	    let user = this.UserService.getCurrentUser();
		let jobInfo = {
            user: user['_id'],
            title: this.job.jobTitle,
            description: this.job.jobDescription,
            startDate: this.job.startDate,
            endDate: this.job.endDate,
            skills: [] //todo this.job.skills
		};
        // this.job['user'] = user['_id'];
        this.JobService.create(jobInfo).then(data => {
            let _id = data['_id'];
            this.$state.go('job',{ jobId:_id});
            //todo go to Job-View
        });
	}

	$onInit(){
		this.job = JSON.parse(JSON.stringify(this.job))

		/*let currentDate = new Date();
		this.maxStartDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 1,
			currentDate.getDate()
		);
		this.maxEndDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate()
		);*/
	}
	
    static get $inject () {
      return ['$state',UserService.name, JobService.name];
    }

}


export default ViewAddJobComponent;
