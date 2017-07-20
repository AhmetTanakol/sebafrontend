'use strict';

export default class CompanyService {

    static get $inject(){
        return ['$http', '$window', 'API_URL'];
    }

    constructor($http, $window, API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;
        this.resourceUrl = `${ this.API_URL }/company/`;
    }

    static get name(){
        return 'companyService';
    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
    }


    update(company) {
        let url = `${ this.resourceUrl }${ company['_id'] }`;
        return this.$http.put(url,company).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
    }

    listLocations() {
      return this.$http.get(`${ this.API_URL }/location/`).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

    listIndustries() {
      return this.$http.get(`${ this.API_URL }/industry/`).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        })
      });
    }

}
