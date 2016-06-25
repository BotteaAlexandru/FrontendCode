/**
 * Created by Alex on 6/25/2016.
 */
hrApp.controller('MathController', ['$rootScope','$scope', function($rootScope, $scope){
    $scope.start = function() {
        $scope.addResult = $scope.firstNumber + $scope.secondNumber;
        $scope.subResult = $scope.firstNumber - $scope.secondNumber;
        $scope.multResult = $scope.firstNumber * $scope.secondNumber;
        $scope.divResult = $scope.firstNumber / $scope.secondNumber;
    };

}]);

