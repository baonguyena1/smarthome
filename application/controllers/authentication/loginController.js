app.controller('loginController', function($rootScope, $scope, $state) {
    // init data
    $scope.remember_me = false;

    $scope.login = function() {
        console.log('username = ', $scope.username, ' ', $scope.password, ' ', $scope.remember_me);
        // Call rest api
        $scope.$on('response', function(event, data) {
            console.log(data);
            $scope.result = data;
        })

        var result = {
            'errors': null,
            'status': false,
            'message': 'success'
        };
        $rootScope.$broadcast('response', result);
    }

    $scope.disable = function(username, password) {
        return username == null || username == '' || password == null || password == '';
    }
})