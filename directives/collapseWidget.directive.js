(function(){

    let app = angular.module('app');

    app.directive('collapseWidget', function () {
        return {
            restrict: 'E',
            scope: {
                hasCollapsed: '='
            },
            templateUrl: '../templates/collapseWidget.template.htm'
        };
    });

})();


