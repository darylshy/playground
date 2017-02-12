(function(){

    //model description: user-info card labels and state

    let app = angular.module('app');

    app.directive('userInfoCard', function () {
        return {
            restrict: 'E',
            scope: {
                personObject: '='
            },
            templateUrl: '../templates/userInfoCard.template.htm',
            controller: function ($scope) {
                $scope.mainHeading = "User Info Card";
                $scope.hasCollapsed = false;
            }
        }
    });

})();