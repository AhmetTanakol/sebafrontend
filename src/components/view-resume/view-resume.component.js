'use strict';

import UserService from './../../services/user/user.service';

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
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
      this.resume = {};
    }

    submit(){
      let resumeInfo = {
        user: this.resume.username,
        phone: this.resume.phone,
        email: this.resume.email,
        type: this.resume.type,
        password: this.resume.password
      };

      this.UserService.resume(resumeInfo).then(()=> {
      });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewResumeComponent;
