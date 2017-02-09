(function(){

    let app = angular.module('app');

    app.directive('userInfo', function () {
        return {
            restrict: 'E',
            scope: {
                personObject: '=',
                mainHeading: '@',
                friendsHeading: '@'
            },
            templateUrl: '../templates/userInfo.template.htm',
            controller: function ($scope) {
                $scope.hasCollapsed = false;
            }
        }
    });

})();