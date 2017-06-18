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
			this.skills.push({
				type: this.skill.type,
				power: this.skill.power,
			});
			this.skill = {};
		}

		$onInit() {
			this.educations = [];
			this.experiences = [];
      this.certificates = [];
      this.skills = [];

      this.certificate = {};
      this.education = {};
			this.experience = {};
      this.skill = {};

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
