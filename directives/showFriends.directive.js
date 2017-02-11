(function(){

    let app = angular.module('app');

    app.directive('showFriends', function () {

        return {
            restrict: 'E',
            scope: {
                personObject: '='
            },
            transclude: true,
            replace: true,
            templateUrl: 'templates/showFriends.template.htm'
        }

    });




})();