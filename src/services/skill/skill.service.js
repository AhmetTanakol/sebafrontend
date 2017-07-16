'use strict';


export default class SkillService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.resourceUrl = `${ API_URL }/skill/`;
    }

    static get name(){
        return 'SkillService';
    }



    list() {
        let url = this.resourceUrl;
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }

    /*create(skill) {
        let url = this.resourceUrl;
        return this.$http.post(url, skill).then(response => {

            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        });
    }*/

    get(skillID) {
        let url = `${ this.resourceUrl }${ skillID }`;
        return this.$http.get(url).then(response => {
            return new Promise((resolve, reject) => {
                resolve(response.data);
            });
        })
    }
}
