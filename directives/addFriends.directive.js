(function(){

    let app = angular.module('app');

    app.directive('addFriends', function () {

        return {
            restrict: 'E',
            scope: {
                personObject: '=',
                addFriendForm: '='
            },
            templateUrl: 'templates/addFriends.template.htm',
            controller: function ($scope) {
                $scope.showForm = false;
            },
            link: function (scope) {
                scope.addFriend = function(friend){
                    scope.personObject.friends.unshift({});
                    scope.personObject.friends[0].name = friend;
                    scope.personObject.friends[0].best = false;
                    scope.newFriend = {};
                };

                scope.displayForm = function () {
                    scope.showForm = !scope.showForm;
                };
            }
        }


    });


})();