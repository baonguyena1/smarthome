app.controller('modal.logout', function($scope, $uibModalInstance, data) {
    $scope.data = data;
    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})