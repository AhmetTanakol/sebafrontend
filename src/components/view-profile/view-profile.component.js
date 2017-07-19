'use strict';

import UserService from './../../services/user/user.service';
import CompanyService from './../../services/company/company.service';
import JobService from './../../services/job/job.service';

import template from './view-profile.template.html';
import './view-profile.style.css';

class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewProfile';
    }


}

class ViewProfileComponentController{
    constructor($state, UserService, CompanyService, JobService, $sce){
        this.$state = $state;
        this.UserService = UserService;
        this.CompanyService = CompanyService;
        this.JobService = JobService;
        this.$sce = $sce;
    }


    isUserCompany() {
		  if (this.currentUser.type === 'company') {
		    return true;
		  }
		  return false;
	  }

    trustSrc(video) {
      return this.$sce.trustAsResourceUrl(video);
    }

    $onInit() {
      if (this.UserService.isAuthenticated()) {
        this.currentUser = this.UserService.getCurrentUser();
        if (this.isUserCompany()) {
            this.jobs = [];

            this.CompanyService.get(this.currentUser.company).then(company => {
            this.company = company;
            this.company.video = this.company.video.replace("watch?v=", "embed/");

            // get job collection
				    this.JobService.list(this.currentUser.company).then(jobbycompany => {
					  this.jobs = jobbycompany;

				    });
          });
        }

        
      }
    }

    static get $inject(){
        return ['$state', UserService.name, CompanyService.name, JobService.name, '$sce'];
    }
}


export default ViewProfileComponent;
