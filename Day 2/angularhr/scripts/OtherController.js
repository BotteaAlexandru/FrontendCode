/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('OtherController',['$scope', function($scope) {

    $scope.setTitle = function() {
        $scope.title = 'New Title from Child';
    };
}]);