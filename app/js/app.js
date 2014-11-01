'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ui.router',
  'controllers',
  'MessageCenterModule',
  'translator'
]);

myApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    .state('homepage', {
        url: "/home",
        templateUrl: "partials/homepage.html",
    })
    .state('about', {
        url: "/about",
        templateUrl: "partials/about.html",
    })
    .state('register', {
        url: "/register",
        templateUrl: "partials/register.html",
        controller: "RegisterCtrl"
    })
    .state('contact', {
        url: "/contact",
        templateUrl: "partials/contact.html",
        controller: "ContactCtrl"
    });
});
