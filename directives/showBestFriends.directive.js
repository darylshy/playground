(function(){

    let app = angular.module('app');

    app.directive('showBestFriends', function () {

        return {
            restrict: 'E',
            scope: {
                personObject: '=',
                hasBest: '@'
            },
            templateUrl: 'templates/showBestFriends.template.htm',
            controller: function ($scope) {
                $scope.newBestFriend = false;
            },
            link: function (scope) {
                scope.$watch('hasBest', function (newValue) {
                    scope.newBestFriend = Object.is(newValue,"true");
                });
            }
        }

    });

})();