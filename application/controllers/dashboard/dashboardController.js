app.controller('dashboardController', function($rootScope, $scope, $state, $uibModal, appAlert) {
    
    $scope.showModal = function(type) {
        if (type == 'logout') {
            var data = {
                title: 'Logout?',
                message: 'Are you sure want to logout?'
            }
            appAlert.logout(data, function(isOk) {
                if (isOk) {
                    $state.go('login');
                }
            });
        }
    }
})