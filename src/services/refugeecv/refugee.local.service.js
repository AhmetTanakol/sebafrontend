'use strict';

import RefugeeAPISimulator from './refugee.api.simulator';


export default class RefugeeLocalService {

    constructor() {

    }

    static get name(){
        return 'refugeeService';
    }


    list(){
       return RefugeeAPISimulator.getRefugeeAsync().then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    get(id){
        return RefugeeAPISimulator.getMovieByIdAsync(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })

    }

    create(refugee){
        return RefugeeAPISimulator.createMovie(refugee).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });

    }

    delete(id){
        return RefugeeAPISimulator.deleteMovie(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        });

    }

    update(refugee){
        return RefugeeAPISimulator.updateMovie(refugee).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });
    }

}