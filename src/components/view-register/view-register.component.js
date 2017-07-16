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
        user: this.register.username,
        phone: this.register.phone,
        email: this.register.email,
        type: this.register.type,
        password: this.register.password
      };

      this.UserService.register(registerInfo).then(()=> {
        this.$state.go('main',{});
      });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRegisterComponent;
