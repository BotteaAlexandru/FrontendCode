hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionsService', function ($scope, EmployeeActionsService, JobActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobsActionList = JobActionsService;
    $scope.currentDate = new Date();
}]);
