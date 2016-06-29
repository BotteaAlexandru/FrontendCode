hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService', 'DepartmentsService', 'JobsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentsService, JobsService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };
            

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;

        EmployeeService.findEmployees()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findAll: " + err);
            });

        JobsService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findAll: " + err);
            });

        DepartmentsService.findDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments/findAll: " + err);
            });

}]);