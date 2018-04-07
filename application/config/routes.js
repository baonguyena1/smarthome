'use strict';

var app = angular.module('smarthome', ['ui.router', 'ui.bootstrap']);

app.service('appAlert', function($uibModal, $http) {
    this.logout = function(data, callback) {

        var modalInstance = $uibModal.open({
            templateUrl: 'application/views/common/logout-modal.html',
            controller: 'modal.logout',
            cache: false,
            resolve: {
                data: function() {
                    return data;
                }
            }
        });
        modalInstance.result.then(function() {
            return callback(true);
        }, function() {
            return callback(false);
        });
    }
})

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
        controller: 'dashboardController',
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