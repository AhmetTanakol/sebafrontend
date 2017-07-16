'use strict';

import UserService from './../../services/user/user.service'; 
import CompanyService from './../../services/company/company.service';

import template from './view-add-profile.template.html';
import './view-add-profile.style.css';

import moment from 'moment/moment';
import _ from 'lodash';

class ViewAddProfileComponent {
    constructor(){
        this.controller = ViewAddProfileComponentController;
        this.template = template;
        this.bindings = {
			company: '<',
        }

    }

    static get name() {
        return 'viewAddProfile';
    }

}

class ViewAddProfileComponentController{
    
	constructor ($state, UserService, CompanyService) {
		this.model = {};
		this.$state = $state;
		this.UserService = UserService;
		this.CompanyService = CompanyService;
	}

    isUserCompany() {
		if (this.currentUser.type === 'company') {
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
			if (this.isUserCompany()) {
			
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
			this.result = result;
		});	
		
	};
    static get $inject () {
      return ['$state', UserService.name, CompanyService.name];
    }

}


export default ViewAddProfileComponent;
