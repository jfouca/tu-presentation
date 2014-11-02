'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ui.router',
  'controllers',
  'MessageCenterModule',
  'translator'
]);

myApp.config(function($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");
    $locationProvider.hashPrefix('!');
    $stateProvider
    .state('homepage', {
        url: "/home",
        templateUrl: "partials/homepage.html",
        controller: "HomeCtrl"
    })
    .state('about', {
        url: "/about",
        templateUrl: "partials/about.html",
        controller: "AboutCtrl"
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

myApp.factory('Page', function(){
    var title = 'default';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
});
