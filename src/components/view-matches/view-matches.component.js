'use strict';

import template from './view-matches.template.html';

import './view-matches.style.css';

class ViewMatchesComponent {
    constructor () {
      this.controller = ViewMatchesController;
      this.template = template;
    }

    static get name () {
      return 'viewMatches';
    }
}

class ViewMatchesController {
  constructor () {
    this.companies = [
      {
        name: 'Google',
        description: 'Hello Google',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Microsoft',
        description: 'Hello Microsoft',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Airbnb',
        description: 'Hello Airbnb',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Spotify',
        description: 'Hello Spotify',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      }
    ];
	
	this.candidates = [
      {
        name: 'Ricci',
        description: 'Hello I am Ricci - I live in Garching',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Ahmet',
        description: 'Hello I am Ricci - I live in Garching',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Zabir',
        description: 'Hello I am Ricci - I live in Munich',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      },
      {
        name: 'Jessica',
        description: 'Hello I am Ricci - I live in Freising',
        image: 'http://www.gstatic.com/webp/gallery/1.jpg'
      }
    ];
	
	this.loginAs = 'company'; // company or refugee
	this.status = 1; // 1 for companies and 2 for refugee
	this.matched = [];
	if (this.status == 1) {
		this.matchTitle = "CANDIDATE";
		this.matched = this.candidates;
	} else if (this.status == 2) {
		this.matchTitle = "JOBS";
		this.matched = this.companies;
	}

	
  }
  
  onInit() {
	
  }
}

export default ViewMatchesComponent;
