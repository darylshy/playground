(function(){

    let app = angular.module('app');

    app.directive('myDirective', function() {
        return {
            scope: true,
            restrict: 'AE',
            templateUrl: 'message.template.htm',
            transclude: true
        };
    });

})();