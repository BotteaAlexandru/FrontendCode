hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'DepartmentsService', 'EmployeeService', 'JobsService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, DepartmentsService, EmployeeService, JobsService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };



        JobsService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findAll: " + err);
            });


        JobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at findOneJob" + err);
            });
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

    }]);