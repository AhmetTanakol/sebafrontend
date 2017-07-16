'use strict';

import UserService from './../../services/user/user.service';
import MatchingService from './../../services/matching/matching.service';

import template from './view-matches.template.html';

import './view-matches.style.css';

class ViewMatchesComponent {
    constructor () {
      this.controller = ViewMatchesController;
      this.template = template;
    }

    static get name () {
      return 'viewMatches';
    }
}

class ViewMatchesController {
	constructor ($state, UserService, MatchingService) {
		this.$state = $state;
		this.UserService = UserService;	
		this.MatchingService = MatchingService;
	}
  
	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			
			// company or refugee
			this.loginAs = this.currentUser.type;
			
			this.jobsMatched = [];
			
			this.matched = [];
			if (this.loginAs == 'company') {
				this.matchTitle = "CANDIDATE";
				
				this.MatchingService.getMatchedJobsAtCompany(this.currentUser.company).then(matches => {

					this.refugeeIds = [];
					
					for(var i=0; i<matches.length; i++) {
						this.refugeeIds.push(matches[i].refugee);
					}

					this.MatchingService.getRefugees(this.refugeeIds).then(refugees => {
						this.matched = refugees;
					});
					
				});
				
			} else if (this.loginAs == 'refugee') {
				this.matchTitle = "JOBS";
				
				this.MatchingService.getMatchedJobsAtRefugee(this.currentUser.refugee).then(matches => {
					this.jobIds = [];
					
					for(var i=0; i<matches.length; i++) {
						this.jobIds.push(matches[i].job);
					}
					
					this.MatchingService.getJobs(this.jobIds).then(jobs => {
						this.matched = jobs;
					});
					
				});
				
			}

		}
	}
	
	static get $inject() {
		return ['$state', UserService.name, MatchingService.name];
	}
}

export default ViewMatchesComponent;
