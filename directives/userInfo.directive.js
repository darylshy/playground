(function(){

    //model description: user-info card labels and state

    let app = angular.module('app');

    app.directive('userInfo', function () {
        return {
            restrict: 'E',
            scope: {
                personObject: '=',
                friendsHeading: '@'
            },
            templateUrl: '../templates/userInfo.template.htm',
            controller: function ($scope) {
                $scope.mainHeading = "User Info Card";
                $scope.hasCollapsed = false;
            }
        }
    });

})();