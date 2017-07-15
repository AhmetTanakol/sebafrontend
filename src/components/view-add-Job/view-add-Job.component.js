'use strict';

import UserService from './../../services/user/user.service';

import template from './view-add-job.template.html';
import './view-add-job.style.css';
import JobService from './../../services/job/job.service';
import SkillService from './../../services/skill/skill.service';


class ViewAddJobComponent {
    constructor(){
        this.controller = ViewAddJobComponentController;
        this.template = template;
        this.bindings = {
        	skills: '<',
		}
    }

    static get name() {
        return 'viewAddJob';
    }

}

class ViewAddJobComponentController{
    
	constructor ($state ,UserService, JobService, SkillService) {
	    this.job ={};
        this.UserService = UserService;
	    this.JobService = JobService;
		this.$state = $state;
		this.SkillService = SkillService;
	}

  	removeSkill (selectedItem) {
		let index = this.job.skills.indexOf(selectedItem);
		this.job.skills.splice(index, 1);
  	}

	addSkill () {
		this.job.skills.push({
			name: this.skill.name,
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
            skills: this.job.skills
		};
        // this.job['user'] = user['_id'];
        this.JobService.create(jobInfo).then(data => {
            let _id = data['_id'];
            this.$state.go('job',{ jobId:_id});
        	//todo go to Job-View
        });
	}

    /*getCurrentUser () {
        let token = this.$window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64)).user;
    }*/

	$onInit(){
		this.job.skills = [];

		this.skill = {};

		this.skill.power = 1;
        this.job.startDate = new Date();
        this.job.endDate = new Date();

		console.log(this.skills);

		/*this.currentDate = new Date();
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
      return ['$state',UserService.name, JobService.name, SkillService.name];
    }

}


export default ViewAddJobComponent;
