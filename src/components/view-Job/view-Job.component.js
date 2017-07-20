'use strict';

import UserService from './../../services/user/user.service';

import template from './view-job.template.html';
import './view-job.style.css';
import JobService from './../../services/job/job.service';
import SkillService from './../../services/skill/skill.service';



class ViewJobComponent {
    constructor(){
        this.controller = ViewJobComponentController;
        this.template = template;
        this.bindings = {
        	job: '<',
		}
    }

    static get name() {
        return 'viewJob';
    }

}

class ViewJobComponentController{
    
	constructor ($state ,UserService, JobService, SkillService) {
        this.UserService = UserService;
	    this.JobService = JobService;
	    this.SkillService = SkillService;
		this.$state = $state;
	}


    back () {
        if (this.UserService.isAuthenticated()) {
            //let _id = this.job['_id'];
            this.userid = this.UserService.getCurrentUser()['_id']
            this.$state.go('jobs',{userid: this.userid});
        } else {
            this.$state.go('login',{});
        }
	}
    edit () {
        if (this.UserService.isAuthenticated()) {
            let _id = this.job['_id'];
            this.$state.go('jobEdit',{ jobId:_id});
        } else {
            this.$state.go('login',{});
        }
    }
	$onInit(){
		this.job = JSON.parse(JSON.stringify(this.job))
		console.log(this.job);
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
      return ['$state',UserService.name, JobService.name, SkillService.name];
    }

}


export default ViewJobComponent;
