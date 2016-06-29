/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService', 'DepartmentsService', 'JobsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentsService, JobsService) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };
    }]);