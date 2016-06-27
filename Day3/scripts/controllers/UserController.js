/**
 * Created by user on 6/27/2016.
 */
hrApp.controller('UserController', ['$scope', '$location', 'UserService', function($scope,$location, UserService) {
    //Adica aici ----------------------------------------------^^^^--------------------------------------^^^^
    $scope.back = function() {
        $location.url('/main/');
    };

    $scope.reset = function() {
        $scope.firstName = undefined;
        $scope.lastName = undefined;
        $scope.age = undefined;
        $scope.id = undefined;
    };

    $scope.save = function () {
        UserService.addUser($scope.firstName, $scope.lastName, $scope.age,$scope.id);
    };

    $scope.show = function () {
        UserService.getUser($scope.index);
    }

}]);