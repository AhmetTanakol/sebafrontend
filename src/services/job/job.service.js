'use strict';
import UserService from './../../services/user/user.service';


export default class JobService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL,UserService) {
        this.$http = $http;
        this.$window = $window;
        this.resourceUrl = `${ API_URL }/job/`;
        this.UserService = UserService;
    }

    static get name(){
        return 'JobService';
    }



    list(userid) {

        let url = this.resourceUrl+'getJobsForUser/${ userid }';
        console.log(url);
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }

    create(job) {
        let url = this.resourceUrl;
        return this.$http.post(url, job).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }

    get(jobID) {
        let url = `${ this.resourceUrl }${ jobID }`;
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        })
    }

    delete(jobID) {
        let url = `${ this.resourceUrl }${ jobID }`;
        return this.$http.delete(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        })
    }
}
