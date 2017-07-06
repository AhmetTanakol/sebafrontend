'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-resume.template.html';
import './view-add-resume.style.css';

import moment from 'moment/moment';
import _ from 'lodash';

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

	removeCertificate (selectedItem) {
		var index = this.certificates.indexOf(selectedItem);
		this.certificates.splice(index, 1);
    }

	removeEducation (selectedItem) {
		var index = this.educations.indexOf(selectedItem);
		this.educations.splice(index, 1);
	}

  	removeExperience (selectedItem) {
		var index = this.experiences.indexOf(selectedItem);
		this.experiences.splice(index, 1);
  	}

  	removeSkill (selectedItem) {
		var index = this.skills.indexOf(selectedItem);
		this.skills.splice(index, 1);
  	}
	
	removeLanguage (selectedItem) {
		var index = this.resume.languages.indexOf(selectedItem);
		this.resume.languages.splice(index, 1);
	}

	addCertificate () {
		this.certificates.push({
			title: this.certificate.title,
			startDate: moment(this.certificate.startDate).format('YYYY-MM-DD'),
			endDate: moment(this.certificate.endDate).format('YYYY-MM-DD'),
		});
		this.certificate = {};
	}

	addEducation () {
		this.educations.push({
		  schoolName: this.education.schoolName,
		  degree: this.education.degree,
		  startDate: moment(this.education.startDate).format('YYYY-MM-DD'),
		  endDate: moment(this.education.endDate).format('YYYY-MM-DD'),
		  schoolDescription: this.education.schoolDescription
		});
		this.education = {};
	}
	
	addExperience () {
		this.experiences.push({
		  company: this.experience.company,
		  jobTitle: this.experience.jobTitle,
		  startDate: moment(this.experience.startDate).format('YYYY-MM-DD'),
		  endDate: moment(this.experience.endDate).format('YYYY-MM-DD'),
		  jobDescription: this.experience.jobDescription
		});
		this.experience = {};
	}

	addSkill () {
		var validSkill = true;
		for (var i=0; i<this.skills.length; i++) {
			if (this.skills[i].type == this.skill.type) {
				validSkill = false;
			}
		}
		if (validSkill) {
			this.skills.push({
				type: this.skill.type,
				power: this.skill.power,
			});
			this.skill = {};
		}
	}
	
	addLanguage () {
		if ((this.resume.language != '') && (this.resume.languages.indexOf(this.resume.language) == -1)) {
			this.resume.languages.push(this.resume.language);
			this.resume.language = '';
		}
	}

	$onInit() {
		this.resume = [];
		this.resume.languages = [];
		this.educations = [];
		this.experiences = [];
		this.certificates = [];
		this.skills = [];

		this.resume.language = '';
		this.certificate = {};
		this.education = {};
		this.experience = {};
		this.skill = {};

		var currentDate = new Date();
		
		this.minStartDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 70,
			currentDate.getDate()
		);
		this.minEndDate = new Date(
			currentDate.getFullYear() - 70,
			currentDate.getMonth(),
			currentDate.getDate()
		);
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
		
		// get languages
		this.languagesList = [
			{id:1, name:'Deutsch'}, 
			{id:2, name:'English'}, 
			{id:3, name:'Indonesian'}, 
			{id:4, name:'Chinese'}, 
			{id:5, name:'Tamil'}, 
			{id:6, name:'Abcwkwkwkwkwkwk'}
		];		
		
		// get country of birth & company location (countries list)
		this.countriesList = [
			{id:1, name:'Germany'}, 
			{id:2, name:'USA'}, 
			{id:3, name:'Indonesia'}, 
			{id:4, name:'China'}, 
			{id:5, name:'India'}, 
			{id:6, name:'Australia'}
		];		
		
		// get skills
		this.skillsList = [
			{id:1, name:'Cook'}, 
			{id:2, name:'Baker'}, 
			{id:3, name:'Construction'}, 
			{id:4, name:'Electrican'}, 
			{id:5, name:'Gardening'}, 
			{id:6, name:'Plumber'}
		];
		
	}
	
	save() {
        /*let user = this.UserService.getCurrentUser();

        this.movie['user'] = user['_id'];
        this.MoviesService.create(this.movie).then(data => {
            let _id = data['_id'];
            this.$state.go('movie',{ movieId:_id});
        });*/

    };
	
    static get $inject () {
      return ['$state'];
    }

}


export default ViewAddResumeComponent;
