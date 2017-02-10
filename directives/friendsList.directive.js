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
                $scope.hasBest = false;
                $scope.showForm = false;

                $scope.hasABest = function () {
                    $scope.personObject.bestFriends = [];
                    for(let friend of $scope.personObject.friends){
                        if(friend.best){
                            $scope.personObject.bestFriends.push(friend);
                        }
                    }
                    $scope.hasBest = $scope.personObject.bestFriends.length > 0;
                };
            },
            link: function (scope) {
                scope.removeFriend = function(idx){
                    scope.personObject.friends.splice(idx,1);
                };

                scope.addFriend = function(friend){
                    scope.personObject.friends.unshift({});
                    scope.personObject.friends[0].name = friend;
                    scope.personObject.friends[0].best = false;
                    scope.newFriend = {};
                };

                scope.displayForm = function () {
                    scope.showForm = !scope.showForm;
                };
            },

            templateUrl: '../templates/friendsList.template.htm'
        }
    });

})();