app.controller('dashboardController', function($rootScope, $scope, $state, $uibModal, appAlert) {
    
    $scope.showModal = function(type) {
        if (type == 'logout') {
            var data = {
                title: 'Logout?',
                message: 'Select "Logout" below if you are ready to end your current session.'
            }
            appAlert.logout(data, function(isOk) {
                if (isOk) {
                    $state.go('login');
                }
            });
        }
    }
})