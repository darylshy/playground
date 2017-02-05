(function(){

    let app = angular.module('app');

    app.directive('myDirective', function() {
        return {
            restrict: 'A',
            scope: true
        };
    });

})();