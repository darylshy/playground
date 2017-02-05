(function(){

    let app = angular.module('app');

    app.directive('guessingGameTitle', function () {
        return {
            restrict: 'E',
            templateUrl: `message.template.htm`,
            replace: true,
            transclude: true
        }
    });


    app.directive('alertDanger', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.on('click', function () {
                    alert(scope.previousguess);
                });
            }
        };
    });

})();