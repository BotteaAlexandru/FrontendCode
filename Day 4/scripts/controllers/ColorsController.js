/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('ColorsController', function ($scope) {
    $scope.text = 'Some text';
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-nuted"
        },
        {
            "text": "primary",
            "class": "text-primary"
        },
        {
            "text": "success",
            "class": "text-success"
        },
        {
            "text": "info",
            "class": "text-info"
        },
        {
            "text": "warning",
            "class": "text-warning"
        },
        {
            "text": "danger",
            "class": "text-danger"
        }
    ];

    $scope.changeColor = function() {
        $scope.savedColor = $scope.myColor.class;
    };


});