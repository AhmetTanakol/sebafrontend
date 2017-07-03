'use strict';

import RefugeeService from './../../services/refugee/refugee.service';
import UserService from './../../services/user/user.service';

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
  constructor($state, UserService, RefugeeService) {
    this.$state = $state;
    this.RefugeeService = RefugeeService;
    this.UserService = UserService;
  }

  isAuthenticated(){
    return this.UserService.isAuthenticated();
  }

  getCurrentUser(){
    //let user = this.UserService.getCurrentUser();
    //return user.username;
    let usertype = 'company';
    return usertype;
  }

  declineCandidate() {

  }

  addCandidate() {

  }

  isUserRefugee() {
    if (this.getCurrentUser() == 'refugee'){
      return true;
    } else {
      return false;
    }
  }

  $onInit() {
    this.refugee = {
      name: "Ahmet Tanakol",
      language: "Turkish",
      nationality: "Turkish",
      location: "Munich",
      age: 28,
      skills: [
        {
          name: "Bakery",
          power: 5
        },
        {
          name: "Cooking",
          power: 7
        }
      ]
    };
    /*if (this.UserService.isAuthenticated()) {
      this.RefugeeService.list().then(response => {

      })

    } else {
      this.$state.go('login',{});
    } */
  }

  static get $inject() {
    return ['$state', UserService.name, RefugeeService.name];
  }
}

export default ViewMatchingComponent;
