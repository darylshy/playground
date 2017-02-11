(function(){


    let app = angular.module('app');

    app.directive('removeFriends', function () {

        return {
            restrict: 'E',
            scope: {
                personObject: '='
            },
            templateUrl: 'templates/removeFriends.template.htm',
            link: function (scope) {
                scope.removeFriend = function(){
                    scope.$emit('friendRemoved', {
                        person: scope.personObject,
                        idx: scope.$parent.$parent.$index
                    });
                };
            }
        }

    });

})();