/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobsService',
    function ($scope, $http, $routeParams, $location, JobsService) {
        $scope.job = undefined;

        JobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/jobList');
        }
    }]);