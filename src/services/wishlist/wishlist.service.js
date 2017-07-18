'use strict';


export default class WishlistService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http, $window, API_URL) {
        this.$http = $http;
		this.$window = $window;
        this.API_URL = API_URL;
        this.resourceUrl = `${ API_URL }/wishlist/`;
    }

    static get name(){
        return 'WishlistService';
    }

    list() {
        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });

        });
    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }	

    create(wishlist) {
        let url = this.resourceUrl;
        return this.$http.post(url,wishlist).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        })
    }
	
	getWishlistByRefugeeId(refugee_id) {
		return this.$http.get(`${this.API_URL}/wishlist/${ refugee_id }`).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
	}
	
	getJobs(job_ids) {
		console.log(job_ids);
      return this.$http.post(`${this.API_URL}/job/getJobs`, {
        params: {
          job_ids: job_ids
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }
	
}