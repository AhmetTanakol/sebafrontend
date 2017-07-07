'use strict';

import UserService from './../../services/user/user.service';
import MatchingService from './../../services/matching/matching.service';

import template from './view-matching.template.html';

import './view-matching.style.css';

import _ from 'lodash';

class ViewMatchingComponent {
  constructor() {
    this.controller = ViewMatchingController;
    this.template = template;
  }

  static get name() {
    return 'viewMatching';
  }
}

class ViewMatchingController {
  constructor($state, UserService, MatchingService) {
    this.$state = $state;
    this.UserService = UserService;
    this.MatchingService = MatchingService;
  }

  selectItem(action, filter) {
    if (this.isUserRefugee()) {
      this.jobCounter++;
      if (this.jobCounter <= this.jobs.length) {
        if (action === 'add') {
          this.MatchingService.matchWithCompany(this.job, this.currentUser).then(data => {
            this.job = this.jobs[this.jobCounter];
          });
        } else {
          this.job = this.jobs[this.jobCounter];
        }
      }
    } else {
      this.refugeeCounter++;
      if (this.refugeeCounter <= this.refugees.length) {
        if (action === 'add') {
          this.MatchingService.matchWithRefugee(this.refugee, this.currentUser, filter.job).then(data => {
            this.refugee = this.refugees[this.refugeeCounter];
          });
        } else {
          this.refugee = this.refugees[this.refugeeCounter];
        }
      }
    }
  }

  isUserRefugee() {
    if (this.currentUser.type === 'refugee') {
      return true;
    }
    return false;
  }

  isUndefined(obj) {
    return _.isUndefined(obj);
  }

  applyFilter() {
    if (this.isUserRefugee()) {
      this.jobs = [];
      this.job = {};
      this.jobCounter = 0;
      this.MatchingService.listCompanies(this.search).then(jobs => {
        this.jobs = jobs;
        this.job = this.jobs[this.jobCounter];
      });
    } else {
      this.refugees = [];
      this.refugee = {};
      this.refugeeCounter = 0;
      this.MatchingService.listRefugees(this.search).then(refugees => {
        this.refugees = refugees;
        this.refugee = this.refugees[this.refugeeCounter];
      });
    }
  }

  $onInit() {
    if (this.UserService.isAuthenticated()) {
      this.currentUser = this.UserService.getCurrentUser();
      this.search = {};
      if (this.isUserRefugee()) {
        this.jobs = [];
        this.job = {};
        this.jobCounter = 0;
        this.MatchingService.listIndustries().then(industries => {
          this.industries = industries;
        });
      } else {
        this.refugees = [];
        this.refugee = {};
        this.refugeeCounter = 0;
        this.MatchingService.listJobs(this.currentUser._id).then(jobs => {
          this.jobList = jobs;
        });
      }
      this.MatchingService.listLocations().then(locations => {
        this.locations = locations;
      });

      this.MatchingService.listSkills().then(skills => {
        this.skills = skills;
      });

    } else {
      this.$state.go('login',{});
    }
  }

  static get $inject() {
    return ['$state', UserService.name, MatchingService.name];
  }
}

export default ViewMatchingComponent;
