(function(){

    let app = angular.module('app');

    app.directive('updateBestFriends',function () {

        return {
            restrict: 'E',
            scope: {
                personObject: '='
            },
            templateUrl: 'templates/updateFriends.template.htm',
            link: function (scope) {
                scope.hasABest = function () {
                    scope.personObject.bestFriends = [];
                    for(let friend of scope.personObject.friends){
                        if(friend.best){
                            scope.personObject.bestFriends.push(friend);
                            console.log(scope.personObject.bestFriends);
                        }
                    }
                    scope.$emit('newBestFriend', scope.personObject.bestFriends.length > 0);
                };
            }
        }

    });



})();