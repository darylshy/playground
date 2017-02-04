(function(){

    let app = angular.module('app');

    app.directive('messageReply', function () {
        return {
            restrict: 'E',
            templateUrl: `message.template.htm`,
            replace: true
        }
    });

})();