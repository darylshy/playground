(function() {

    let app = angular.module('app');

    function uiCtrl($scope,$http) {

        //model description: defines user info data

        $scope.$on('friendRemoved', function (e, args) {
            args.person.friends.splice(args.idx,1);
        });

        $scope.$on('friendAdded', function (e, args) {
            args.person.friends.unshift({});
            args.person.friends[0].name = args.friend.name;
            args.person.friends[0].best = args.friend.best;
        });

        $http({
            method: 'GET',
            url: 'mock/personObject.json'
        }).then(function (results) {
            $scope.people = results.data;
        });

    }

    app.controller('UserInfoController', uiCtrl);

    uiCtrl.$inject = ['$scope', '$http'];

})();