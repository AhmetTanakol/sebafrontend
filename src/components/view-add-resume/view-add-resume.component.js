'use strict';

import UserService from './../../services/user/user.service'; 
import RefugeeService from './../../services/refugee/refugee.service';

import template from './view-add-resume.template.html';
import './view-add-resume.style.css';

import moment from 'moment/moment';
import _ from 'lodash';

class ViewAddResumeComponent {
    constructor(){
        this.controller = ViewAddResumeComponentController;
        this.template = template;
		this.bindings = {
			refugee: '<',
        }
    }

    static get name() {
        return 'viewAddResume';
    }

}

class ViewAddResumeComponentController{
    
	constructor ($state, UserService, RefugeeService) {
		this.model = {};
		this.$state = $state;
		this.UserService = UserService;
		this.RefugeeService = RefugeeService;
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
			if (this.skills[i].name == this.skill.type) {
				validSkill = false;
			}
		}
		if (validSkill) {
			this.skills.push({
				name: this.skill.type,
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
	
	isUserRefugee() {
		if (this.currentUser.type === 'refugee') {
		  return true;
		}
		return false;
	}

	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			if (this.isUserRefugee()) {
			
				this.refugee = [];
				this.resume = [];
				this.resume.languages = [];
				this.educations = [];
				this.experiences = [];
				this.certificates = [];
				this.skills = [];
				this.cities = [];

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
				/*this.languagesList = [
					{id:1, name:'Deutsch'}, 
					{id:2, name:'English'}, 
					{id:3, name:'Indonesian'}, 
					{id:4, name:'Chinese'}, 
					{id:5, name:'Tamil'}, 
					{id:6, name:'Abcwkwkwkwkwkwk'}
				];*/		
				this.RefugeeService.listLanguages().then(languages => {
					this.languagesList = languages;
				});
				
				// get country of birth & company location (countries list)
				this.countriesList = [
					{id:1, name:'Germany'}, 
					{id:2, name:'USA'}, 
					{id:3, name:'Indonesia'}, 
					{id:4, name:'China'}, 
					{id:5, name:'India'}, 
					{id:6, name:'Australia'}
				];		
				
				// get Germany city
				this.RefugeeService.listLocations().then(cities => {
					this.cities = cities;
				});	
				
				// get skills
				this.RefugeeService.listSkills().then(skills => {
					this.skillsList = skills;
				});	
				
				console.log(this.currentUser._id);
				this.RefugeeService.get(this.currentUser._id).then(refugee => {
					this.refugee = refugee;
				});
				
				console.log(this.refugee);
				
				
			}
		} else {
			this.$state.go('login',{});
		}
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
		return ['$state', UserService.name, RefugeeService.name];
    }

}


export default ViewAddResumeComponent;
