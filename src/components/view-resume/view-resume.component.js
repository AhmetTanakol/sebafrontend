'use strict';

import UserService from './../../services/user/user.service';
import RefugeeService from './../../services/refugee/refugee.service';

import template from './view-resume.template.html';
import './view-resume.style.css';

class ViewResumeComponent {
    constructor(){
        this.controller = ViewResumeComponentController;
        this.template = template;
		this.bindings = {
            resume: '<',
        }
    }

    static get name() {
        return 'viewResume';
    }


}

class ViewResumeComponentController{
    constructor($state, UserService, RefugeeService){
        this.$state = $state;
        this.UserService = UserService;
		this.RefugeeService = RefugeeService;
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
			this.canDisplay = false;
			this.refugee = [];
			if (angular.isObject(this.resume)) {
				this.canDisplay = true;
				this.refugee_id = this.resume._id;
				this.refugee = this.resume;
			}/* else if (this.isUserRefugee()) {
				this.canDisplay = true;
				this.refugee_id = this.currentUser.refugee;
			}*/

			if (this.canDisplay) {
				//this.refugee = [];
				this.skills = [];
				this.languagesList = [];
				this.countriesList = [];
				this.cities = [];
				this.skillsList = [];
				this.educations = [];
				this.experiences = [];
				this.profilePicture = '';
				this.languages = [];
				
				// get languages collection
				this.RefugeeService.listLanguages().then(languages => {
					this.languagesList = languages;
					
					// get language name from language id
					if (typeof this.refugee.language != "undefined") {
						for (var i=0; i<this.refugee.language.length; i++) {
							var aliaslang = this.getNameFromId(this.languagesList, this.refugee.language[i]);
							this.languages.push(aliaslang);
						}
					}
				});
				
				// get country of birth & company location (countries list)
				this.RefugeeService.listCountries().then(countries => {
					this.countriesList = countries;
					
					// get refugee education from experience collection with refugee_id param
					this.RefugeeService.getExperiencesByRefugeeId(this.refugee_id).then(experiences => {
						this.experiences = experiences;
						for (var i=0; i<this.experiences.length; i++) {
							var aliasloc = this.getNameFromId(this.countriesList, this.experiences[i].companyLocation);
							this.experiences[i].alias = aliasloc;
						}
					});
					
				});	

				// get Germany cities collection
				this.RefugeeService.listLocations().then(cities => {
					this.cities = cities;
					
					// get city name from id
					var alias = this.getNameFromId(this.cities, this.refugee.city);
					this.refugee.city = alias;
				});	
				
				// get skills collection
				this.RefugeeService.listSkills().then(skills => {
					this.skillsList = skills;
					
					// get skills name from skills id
					if (typeof this.refugee.skills != "undefined") {
						for (var i=0; i<this.refugee.skills.length; i++) {
							var aliasskill = this.getNameFromId(this.skillsList, this.refugee.skills[i].name);
							this.skills.push({						
								name : aliasskill,
								power : this.refugee.skills[i].power,
							});
						}
					}
				});

				// get refugee education from education collection with refugee_id param
				this.RefugeeService.getEducationsByRefugeeId(this.refugee_id).then(educations => {
					this.educations = educations;
				});
				
				
				if (angular.isObject(this.refugee)) {
					if (this.refugee.hasOwnProperty("photo") && this.refugee.photo != '') {
						this.profilePicture = this.refugee.photo;
					} else {
						if (this.refugee.gender == 'female') {
							this.profilePicture = "http://crowdresearch.uwa.edu.au/wp-content/uploads/2016/02/female-profile.gif";
						} else {
							this.profilePicture = "http://eatyourveggie.com/images/male_profile.gif";
						}
					}
				}
			
			}
		}
	}
	
    static get $inject(){
        return ['$state', UserService.name, RefugeeService.name];
    }
}


export default ViewResumeComponent;
