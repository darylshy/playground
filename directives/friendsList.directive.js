(function(){

    //model definition: defines friends-list card labels and state.

    let app = angular.module('app');

    app.directive('friendsList', function () {
        return {
            restrict: 'E',
            scope: {
                personObject: '='
            },
            controller: function ($scope) {
                $scope.friendsHeading = "List of Friends";
                $scope.hasCollapsed = true;
                $scope.$on('newBestFriend', function (event, args) {
                    $scope.hasBest = args;
                });
            },
            templateUrl: '../templates/friendsList.template.htm'
        }
    });

})();