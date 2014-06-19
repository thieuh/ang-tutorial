'use strict';

/* global app:true */
/* global Firebase:true */
/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'views/showpost.html',
                controller: 'PostViewCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthCtrl'
            })
            .when('/users/:username', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .constant('FIREBASE_URL', 'https://resplendent-fire-2939.firebaseIO.com/');
