/**
 * Created by user on 6/27/2016.
 */
hrApp.controller('UserController', ['$scope', '$location', 'UserService', function($scope, UserService,$location) {




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
        var user =
        {firstName: $scope.firstName,
            lastName: $scope.lastName,
            age: $scope.age,
            id: $scope.id
        };
        UserService.addUser(user);
        alert("user add");
    };

    $scope.show = function () {
        alert(UserService.get());
    }

}]);