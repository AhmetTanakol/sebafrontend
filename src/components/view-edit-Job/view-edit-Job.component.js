'use strict';

import UserService from './../../services/user/user.service';

import template from './view-edit-job.template.html';
import './view-edit-job.style.css';
import JobService from './../../services/job/job.service';
import SkillService from './../../services/skill/skill.service';


class ViewEditJobComponent {
    constructor(){
        this.controller = ViewEditJobComponentController;
        this.template = template;
        this.bindings = {
        	skills: '<',
			job: '<'
		}
    }

    static get name() {
        return 'viewEditJob';
    }

}

class ViewEditJobComponentController{
    
	constructor ($state ,UserService, JobService, SkillService) {
	    this.job ={};
        this.skillObj = {};
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
            _id: this.skillObj['_id'],
            name: this.skillObj['name'],
            power: this.skill.power,
        });
        console.log(this.job.skills);
        this.skill = {};
        this.skill.power = 1;
    }

	submit () {
	    let user = this.UserService.getCurrentUser();
		let jobInfo = {
		    _id: this.job._id,
            user: user['_id'],
            title: this.job.title,
            description: this.job.description,
            startDate: this.job.startDate,
            endDate: this.job.endDate,
            skills: this.job.skills
		};
        // this.job['user'] = user['_id'];
		console.log(jobInfo);
        this.JobService.update(jobInfo).then(data => {
        	console.log('going to job');
            let _id = data['_id'];
            this.$state.go('job',{ jobId:_id});
        	//todo go to Job-View
        });
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

    /*getCurrentUser () {
        let token = this.$window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64)).user;
    }*/

	$onInit(){
        console.dir('to parse job: '+this.job);
        this.job = JSON.parse(JSON.stringify(this.job));
		console.dir('parsed job: '+this.job);
        console.dir(this.job);
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


export default ViewEditJobComponent;
