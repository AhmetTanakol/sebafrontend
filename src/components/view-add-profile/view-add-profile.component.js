'use strict';

import UserService from './../../services/user/user.service';
import CompanyService from './../../services/company/company.service';

import template from './view-add-profile.template.html';
import './view-add-profile.style.css';

import _ from 'lodash';

class ViewAddProfileComponent {
    constructor(){
        this.controller = ViewAddProfileComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewAddProfile';
    }

}

class ViewAddProfileComponentController{

	constructor ($state, UserService, CompanyService, $mdDialog) {
		this.$state = $state;
		this.UserService = UserService;
		this.CompanyService = CompanyService;
		this.$mdDialog = $mdDialog;
	}

  removeLocation (selectedItem) {
    var index = this.company.location.indexOf(selectedItem);
    this.company.location.splice(index, 1);
  }

  addLocation () {
		var locationIds = this.addedLocations;
		var newLocations = _.filter(this.locations, function (loc) {
			return _.includes(locationIds, loc._id);
		});
		for(var i=0;i<newLocations.length;i++) {
      this.company.location.push(newLocations[i]);
		}
  }

  removeIndustry (selectedItem) {
    var index = this.company.industry.indexOf(selectedItem);
    this.company.industry.splice(index, 1);
  }

  addIndustry () {
    var industryIds = this.addedIndustries;
    var newIndustries = _.filter(this.industries, function (ind) {
      return _.includes(industryIds, ind._id);
    });
    for(var i=0;i<newIndustries.length;i++) {
      this.company.industry.push(newIndustries[i]);
    }
  }

	isUserCompany() {
		if (this.currentUser.type === 'company') {
		  return true;
		}
		return false;
	}

	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			if (this.isUserCompany()) {
        this.CompanyService.listIndustries().then(industries => {
          this.industries = industries;
        });
        this.CompanyService.listLocations().then(locations => {
          this.locations = locations;
        });
				this.company = [];

				this.CompanyService.get(this.currentUser.company).then(company => {
					this.company = company;
				});
			}
		} else {
			this.$state.go('login',{});
		}
	}

    save() {
		this.CompanyService.update(this.company).then(data => {
      this.$mdDialog.show(
        this.$mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Company Update')
          .textContent('Company Information Updated')
          .ariaLabel('Left to right demo')
          .ok('Got it')
          .openFrom('#left')
          .closeTo(angular.element(document.querySelector('#right')))
      );
		});

	};
    static get $inject () {
      return ['$state', UserService.name, CompanyService.name, '$mdDialog'];
    }

}


export default ViewAddProfileComponent;
