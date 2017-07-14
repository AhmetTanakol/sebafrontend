'use strict';


export default class JobService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;

    }

    static get name(){
        return 'JobService';
    }



    list() {

        let url = this.API_URL;
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }

    create(job) {
        let url = this.API_URL;
        return this.$http.post(url, job).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }









    /*listLocations() {
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

    listJobs(companyUser) {
      return this.$http.get(`${this.API_URL}/job/`, {
        params: {
          user: companyUser
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

    listCompanies(parameters, user) {
        return this.$http.get(`${this.API_URL}/company/findCompanies`, {
          params: {
            location: parameters.location,
            industry: parameters.industry,
            skill: parameters.skill,
            user: user
          }
        }).then(response => {
           return new Promise((resolve, reject) => {
              resolve(response.data);
           });
        });
    }

    listRefugees(parameters, user) {
      return this.$http.get(`${this.API_URL}/refugee/findRefugees`, {
        params: {
          location: parameters.location,
          skill: parameters.skill,
          age: parameters.age,
          gender: parameters.gender,
          user: user,
          job: parameters.job
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

    matchWithCompany(job, user) {
      return this.$http.post(`${this.API_URL}/match/matchWithCompany`, {
        params: {
          job: job,
          user: user
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

    matchWithRefugee(refugee, user, job) {
      return this.$http.post(`${this.API_URL}/match/matchWithRefugee`, {
        params: {
          refugee: refugee,
          job: job,
          user: user
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }*/
}
