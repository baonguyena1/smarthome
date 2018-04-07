app.controller('modal.logout', function($scope, $uibModalInstance) {
    $scope.ok = function () {
        $modalInstance.close();
    };
    
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
})