(function(){


    let app = angular.module('app');

    app.directive('removeFriends', function () {

        return {
            restrict: 'E',
            personObject: '=',
            templateUrl: 'templates/removeFriends.template.htm',
            link: function (scope) {
                scope.removeFriend = function(idx){
                    scope.personObject.friends.splice(idx,1);
                };
            }
        }

    });

})();