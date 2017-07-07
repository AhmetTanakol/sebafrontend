'use strict';


export default class MatchingService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;

    }

    static get name(){
        return 'MatchingService';
    }

    addRefugee() {

    }

    listLocations() {
        return this.$http.get(`${this.API_URL}/location/`).then(response => {
           return new Promise((resolve, reject) => {
               resolve(response.data);
           });
        });
    }

    listIndustries() {
        return this.$http.get(`${this.API_URL}/industry/`).then(response => {
           return new Promise((resolve, reject) => {
               resolve(response.data);
           })
        });
    }

    listSkills() {
      return this.$http.get(`${this.API_URL}/skill/`).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

    listCompanies(parameters) {
        return this.$http.get(`${this.API_URL}/company/findCompanies`, {
          params: {
            location: parameters.location,
            industry: parameters.industry,
            skill: parameters.skill
          }
        }).then(response => {
           return new Promise((resolve, reject) => {
              resolve(response.data);
           });
        });
    }

    listRefugees(parameters) {
      return this.$http.get(`${this.API_URL}/refugee/findRefugees`, {
        params: {
          location: parameters.location,
          skill: parameters.skill,
          age: parameters.age,
          gender: parameters.gender
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }
}
