'use strict';

var app = angular.module('smarthome', ['ui.router', 'ui.bootstrap']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'application/views/authentication/login.html',
        controller: 'loginController',
        cache: false,
        resolve: {}
    })
    .state('dashboard', {
        url: '/dasbboard',
        templateUrl: 'application/views/dashboard/dashboard.html',
        cache: false,
        resolve: {}
    })
});

// app.run(function($rootScope, $state, $stateParams) {
//     $rootScope.$state = $state;
//     $rootScope.$stateParams = $stateParams;

//     $rootScope.$on('$stateChangeStart', function(event, toState, toPatams, fromState, fromParams) {
//         console.log('smarthome#run#stateChangeStart; from:', fromState.name, ' to:', toState.name);
//     })
// })