'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import NotificationComponent from './../components/view-notifications/view-notifications.component';
import MainComponent from './../components/view-main/view-main.component'
import AddResumeComponent from './../components/view-add-resume/view-add-resume.component';
import ResumeComponent from './../components/view-resume/view-resume.component';
import AddProfileComponent from './../components/view-add-profile/view-add-profile.component';
import ProfileComponent from './../components/view-profile/view-profile.component';
import MatchingComponent from './../components/view-matching/view-matching.component';
import AddJobComponent from './../components/view-add-Job/view-add-Job.component';
import JobComponent from './../components/view-Job/view-Job.component';
import JobsComponent from './../components/view-Jobs/view-Jobs.component';
import EditJobComponent from './../components/view-edit-Job/view-edit-Job.component';

import JobService from './../services/job/job.service'
import SkillService from './../services/skill/skill.service'

resolveSkills.$inject = [SkillService.name];
function resolveSkills( SkillService) {
    return SkillService.list()
}
resolveJob.$inject = ['$stateParams', JobService.name];
function resolveJob($stateParams, JobService) {
    return JobService.get($stateParams.jobId)
}


resolveJobs.$inject = ['$stateParams', JobService.name];
function resolveJobs($stateParams, JobService) {
    return JobService.list($stateParams.userid)
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function config ($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            url: '/main',
            component: MainComponent.name,
        })
        .state('login', {
          url: '/login',
          component: LoginComponent.name,
        })
        .state('register', {
          url: '/register',
          component: RegisterComponent.name,
        })
        .state('notifications', {
          url: '/notification',
          component: NotificationComponent.name,
        })
        .state('addResume', {
          url: '/add-resume',
          component: AddResumeComponent.name,
        })
        .state('jobs', {
            url: '/job/getJobsForUser/:userid/',
            component: JobsComponent.name,
            resolve: {
                jobs: resolveJobs
            }
        })
        .state('job', {
            url: '/job/:jobId/',
            component: JobComponent.name,
            resolve: {
                job : resolveJob
            }
        })
        .state('jobAdd', {
            url: '/job/new',
            component: AddJobComponent.name,
            resolve: {
                skills: resolveSkills
            }
        })
        .state('jobEdit', {
            url: '/job/:jobId/edit',
            component: EditJobComponent.name,
            resolve: {
                job : resolveJob,
                skills : resolveSkills
            }
        })
        .state('viewResume', {
          url: '/view-resume',
          component: ResumeComponent.name,
        })
        .state('addProfile', {
          url: '/add-profile',
          component: AddProfileComponent.name,
        })
        .state('viewProfile', {
          url: '/view-profile',
          component: ProfileComponent.name,
        })
        .state('viewMatching', {
          url: '/matching',
          component: MatchingComponent.name,
        })
}

