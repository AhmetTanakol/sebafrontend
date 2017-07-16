'use strict';

export default class CompanyService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/company/`;

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

        })
    }


    update(company) {

        let url = `${ this.resourceUrl }${ company['_id'] }`;
        return this.$http.put(url,company).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }



}