'use strict';

import UserService from './../../services/user/user.service';

import template from './view-register.template.html';
import './view-register.style.css';

class ViewRegisterComponent {
    constructor(){
        this.controller = ViewRegisterComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRegister';
    }


}

class ViewRegisterComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
      this.register = {};
    }

    submit(){
      let registerInfo = {
        name: this.register.name,
        email: this.register.email,
        type: this.register.type,
        password: this.register.password
      };
      if (this.register.phone) {
        registerInfo.phone = this.register.phone;
      }
      this.UserService.register(registerInfo).then(()=> {
        this.$state.go('viewMatching',{});
      });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRegisterComponent;
