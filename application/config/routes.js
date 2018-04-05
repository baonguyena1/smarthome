var app = angular.module('smarthome', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'application/views/authentication/login.html'
    })
});