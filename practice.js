(function(){

    let app = angular.module('app');

    app.controller('mainCtrl', controller);
    function controller($scope) {
        $scope.message = "I have not been clicked";
        // $scope.handleClick = function (param) {
        //     $scope.message = param;
        //     //console.log(param);
        // }
        $scope.$on('newMessage', function (e,args) {
            $scope.message = args.message;
        });
    }
    controller.$inject = ['$scope'];

    app.directive('myClick', function ($parse) {
       
        return {
            restrict: 'A', 
            // link: function (scope, el, attrs) {
            //     let fn = $parse(attrs['myClick']);
            //     el.on('click', function (e) {
            //        scope.$apply(function () {
            //            fn(scope, {message: "I have been clicked"});
            //        });
            //     });
            // }
            // MY MUCH-MUCH! LESS CONFUSING IMPLEMENTATION OF THE EXACT SAME THING FROM:
            // decorator directives, module 4; Pluralsight: Angular Directives Fundamentals with Joe Eames
            link: function (scope, el, attrs) {
                el.on('click', function (e) {
                    scope.$apply(function () {
                        scope.$emit('newMessage', {message: "I have been clicked"});
                    });
                });
            }
        }
    });





























})();

