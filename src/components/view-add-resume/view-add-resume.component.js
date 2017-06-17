'use strict';

/*import UserService from './../../services/user/user.service'; */

import template from './view-add-resume.template.html';
import './view-add-resume.style.css';

import moment from 'moment/moment';

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

		addEducation () {
			this.education.push({
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

		$onInit() {
			this.experiences = [];
				this.experience = {};
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
      return ['$state'];
    }

}


export default ViewAddResumeComponent;
