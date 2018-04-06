app.controller('loginController', function($rootScope, $scope, $state) {
    // init data
    $scope.remember_me = false;

    var username = 'bao';
    var password = '1234';

    $scope.login = function() {
        console.log('username = ', $scope.username, ' ', $scope.password, ' ', $scope.remember_me);
        // Call rest api
        $scope.$on('response', function(event, data) {
            console.log(data);
            $scope.result = data;
        })

        $scope.$on('$stateChangeSuccess', function(event) {
            console.log('event ', event);
        })

        var result = {};
        if ($scope.username === username && $scope.password === password) {
            result['errors'] = null;
            result['status'] = true;
            result['message'] = 'success';
            $state.go("dashboard");
        } else {
            result['errors'] = 'error';
            result['status'] = false;
            result['message'] = 'Tên người dùng hoặc mật khẩu không hợp lệ';
        }
        $rootScope.$broadcast('response', result);
    }

    $scope.disable = function(username, password) {
        return username == null || username == '' || password == null || password == '';
    }
})