'use strict';

import UserService from './../../services/user/user.service';
import WishlistService from './../../services/wishlist/wishlist.service';

import template from './view-wishlist.template.html';

import './view-wishlist.style.css';

class ViewWishlistComponent {
    constructor () {
      this.controller = ViewWishlistController;
      this.template = template;
    }

    static get name () {
      return 'viewWishlist';
    }
}

class ViewWishlistController {
    constructor ($state, UserService, WishlistService) {
		this.$state = $state;
		this.UserService = UserService;	
		this.WishlistService = WishlistService;
    }
	
	$onInit() {
		if (this.UserService.isAuthenticated()) {
			this.currentUser = this.UserService.getCurrentUser();
			
			// company or refugee
			this.loginAs = this.currentUser.type;
			
			this.wishlist = [];
			
			if (this.loginAs == 'refugee') {
				
				this.WishlistService.getWishlistByRefugeeId(this.currentUser.refugee).then(wishlist => {
					this.jobIds = [];
					
					for(var i=0; i<wishlist.length; i++) {
						this.jobIds.push(wishlist[i].job);
					}
					
					this.WishlistService.getJobs(this.jobIds).then(jobs => {
						this.wishlist = jobs;
					});
					
				});
				
			}

		}
	}
	
	static get $inject() {
		return ['$state', UserService.name, WishlistService.name];
	}
}

export default ViewWishlistComponent;
