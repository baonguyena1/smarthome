app.controller('logoutModalController', function($scope, $uibModalInstance, data) {
    
    $scope.data = data;
    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})