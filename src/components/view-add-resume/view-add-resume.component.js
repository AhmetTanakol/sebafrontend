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
		var index = this.languages.indexOf(selectedItem);
		this.languages.splice(index, 1);
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
			if (this.skills[i]._id == this.skill.type) {
				validSkill = false;
			}
		}
		if (validSkill) {
			var alias = this.getNameFromId(this.skillsList, this.skill.type);
			this.skills.push({
				name: this.skill.type,			
				power: this.skill.power,
				nameAlias : alias,
			});
			this.skill = {};
		}
	}
	
	addLanguage () {
		if ((this.language != '') && (this.languages.indexOf(this.language) == -1)) {
			var alias = this.getNameFromId(this.languagesList, this.language);
			this.languages.push({
				name: this.language,
				nameAlias : alias,
			});
			this.language = '';
		}
	}
	
	isUserRefugee() {
		if (this.currentUser.type === 'refugee') {
		  return true;
		}
		return false;
	}

	getNameFromId(collection, id) {	
		for (var i=0; i<collection.length; i++) {
			if (collection[i]._id == id) {
				return collection[i].name;
			}
		}
		return null;
	}
  
  
	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			if (this.isUserRefugee()) {
			
				this.refugee = [];
				this.languages = [];
				this.educations = [];
				this.experiences = [];
				this.certificates = [];
				this.skills = [];
				this.cities = [];

				this.language = '';
				this.certificate = {};
				this.education = {};
				this.experience = {};
				this.skill = {};
				
				// get languages
				this.RefugeeService.listLanguages().then(languages => {
					this.languagesList = languages;
					
					// get skills
					this.RefugeeService.listSkills().then(skills => {
						this.skillsList = skills;
						
						// get refugee
						this.RefugeeService.get(this.currentUser.refugee).then(refugee => {
							this.refugee = refugee;
							
							for (var i=0; i<this.refugee.language.length; i++) {
								var langAlias = this.getNameFromId(this.languagesList, this.refugee.language[i]);
								this.languages.push({
									name : this.refugee.language[i],
									nameAlias : langAlias
								});
							}
							
							for (var i=0; i<this.refugee.skills.length; i++) {
								var skillAlias = this.getNameFromId(this.skillsList, this.refugee.skills[i].name);
								this.skills.push({
									name : this.refugee.skills[i].name,
									nameAlias : skillAlias,									
									power: this.refugee.skills[i].power
								});
							}
						});
					});
					
					
				});
				
				// get country of birth & company location (countries list)
				this.RefugeeService.listCountries().then(countries => {
					this.countriesList = countries;
				});	

				// get Germany cities
				this.RefugeeService.listLocations().then(cities => {
					this.cities = cities;
				});	
				
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

			}
		} else {
			this.$state.go('login',{});
		}
	}
	
	save() {
		// moving language from local variable languages to refugee model
		this.refugee.language = [];
		for (var i=0; i<this.languages.length; i++) {
			this.refugee.language.push(this.languages[i].name);
		}
		
		// moving skills from local variable skills to refugee model
		this.refugee.skills = [];
		for (var i=0; i<this.skills.length; i++) {
			this.refugee.skills.push({
				name : this.skills[i].name,
				power : this.skills[i].power
			});
		}
		
		this.RefugeeService.updateResume(this.refugee).then(data => {
			this.result = result;
		});	
		
	};
	
    static get $inject () {
		return ['$state', UserService.name, RefugeeService.name];
    }

}


export default ViewAddResumeComponent;
