app.controller('loginController', function($rootScope, $scope, $state) {

    $scope.login = function() {
        console.log('username = ', $scope.username, ' ', $scope.password, ' ', $scope.remember_me);
        // Call rest api
        $scope.$on('response', function(event, data) {
            console.log(data);
            $scope.result = data;
        })

        var result = {
            'errors': null,
            'status': true,
            'message': 'success'
        };
        $rootScope.$broadcast('response', result);
    }
})