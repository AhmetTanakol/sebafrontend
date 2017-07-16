'use strict';


export default class RefugeeService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http, $window, API_URL) {
        this.$http = $http;
		this.$window = $window;
        this.API_URL = API_URL;
        this.resourceUrl = `${ API_URL }/refugee/`;
    }

    static get name(){
        return 'refugeeService';
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

    create(refugee) {
        let url = this.resourceUrl;
        return this.$http.post(url,refugee).then(responce => {

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

    update(refugee) {

        let url = `${ this.resourceUrl }${ refugee['_id'] }`;
        return this.$http.put(url,refugee).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }
	
	updateResume(refugee, education, experience, certificate) {
      return this.$http.post(`${this.API_URL}/refugee/updateResume`, {
        params: {
          refugee: refugee,
		  education: education,
		  experience: experience,
		  certificate: certificate
        }
      }).then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.data);
        });
      });
    }

	listSkills() {
      return this.$http.get(`${this.API_URL}/skill/`).then(response => {
        return new Promise((resolve, reject) => {
            resolve(response.data);
        });
      });
    }
	
	listLocations() {
		return this.$http.get(`${this.API_URL}/location/`).then(response => {
		   return new Promise((resolve, reject) => {
			 resolve(response.data);
		   });
		});
	}

	listLanguages() {
		return this.$http.get(`${this.API_URL}/language/`).then(response => {
		   return new Promise((resolve, reject) => {
			 resolve(response.data);
		   });
		});
	}
	
	listCountries() {
		return this.$http.get(`${this.API_URL}/country/`).then(response => {
		   return new Promise((resolve, reject) => {
			 resolve(response.data);
		   });
		});
	}
	
	getEducationsByRefugeeId(refugee_id) {
        //let url = `${this.API_URL}/education/${ refugee_id }`;
        return this.$http.get(`${this.API_URL}/education/${ refugee_id }`).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
    }
	
	getExperiencesByRefugeeId(refugee_id) {
		return this.$http.get(`${this.API_URL}/experience/${ refugee_id }`).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
	}
	
	getCertificatesByRefugeeId(refugee_id) {
		return this.$http.get(`${this.API_URL}/certificate/${ refugee_id }`).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
	}
	
}