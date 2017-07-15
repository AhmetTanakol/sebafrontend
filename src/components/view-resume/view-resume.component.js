'use strict';

import UserService from './../../services/user/user.service';
import RefugeeService from './../../services/refugee/refugee.service';

import template from './view-resume.template.html';
import './view-resume.style.css';

class ViewResumeComponent {
    constructor(){
        this.controller = ViewResumeComponentController;
        this.template = template;

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
			if (this.isUserRefugee()) {
				this.refugee = [];
				this.skills = [];
				this.languagesList = [];
				this.countriesList = [];
				this.cities = [];
				this.skillsList = [];
				this.educations = [];
				this.experiences = [];
				
				// get languages collection
				this.RefugeeService.listLanguages().then(languages => {
					this.languagesList = languages;
				});
				
				// get country of birth & company location (countries list)
				this.RefugeeService.listCountries().then(countries => {
					this.countriesList = countries;
				});	

				// get Germany cities collection
				this.RefugeeService.listLocations().then(cities => {
					this.cities = cities;
				});	
				
				// get skills collection
				this.RefugeeService.listSkills().then(skills => {
					this.skillsList = skills;
				});
				
				// get refugee education from education collection with refugee_id param
				this.RefugeeService.getEducationsByRefugeeId(this.currentUser.refugee).then(educations => {
					$this.educations = educations;
					console.log(educations);
				});

				// get refugee education from experience collection with refugee_id param
				this.RefugeeService.getExperiencesByRefugeeId(this.currentUser.refugee).then(experiences => {
					$this.experiences = experiences;
					console.log(experiences);
				});
				
				this.RefugeeService.get(this.currentUser.refugee).then(refugee => {
					this.refugee = refugee;
					
					// get city name from id
					var alias = this.getNameFromId(this.cities, this.refugee.city);
					this.refugee.city = alias;
					
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
				
				
			}
		}
	}
	
    static get $inject(){
        return ['$state', UserService.name, RefugeeService.name];
    }
}


export default ViewResumeComponent;
