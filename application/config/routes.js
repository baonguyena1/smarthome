'use strict';

var app = angular.module('smarthome', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'application/views/authentication/login.html',
        controller: 'loginController',
        cache: false,
        resolve: {}
    })
});

app.controller('loginController', function($rootScope, $scope, $state) {

    $scope.login = function() {
        console.log('username = ', $scope.username);
    }
});