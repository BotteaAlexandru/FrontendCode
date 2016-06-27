hrApp.controller('MathController', ['$scope', 'MathService', function ($scope, MathService) {

    $scope.calculate = function () {
//        TODO #8 calculate op1, op2, op3, op4
//         $scope.op1 = $scope.firstNumber + $scope.secondNumber;
//         $scope.op2 = $scope.firstNumber - $scope.secondNumber;
//         $scope.op3 = $scope.firstNumber * $scope.secondNumber;
//         $scope.op4 = $scope.firstNumber / $scope.secondNumber;

//        TODO #13 refactor your calculations using MathService
        $scope.op1 = MathService.add($scope.firstNumber,$scope.secondNumber);
        $scope.op2 = MathService.substract($scope.firstNumber, $scope.secondNumber);
        $scope.op3 = MathService.multiply($scope.firstNumber, $scope.secondNumber);
        $scope.op4 = MathService.divide($scope.firstNumber, $scope.secondNumber);
    }

}]);
