(function() {

    let app = angular.module('app');

    function uiCtrl($scope) {
        $scope.mainHeading = "User Info Card";
        $scope.person1 = {
            first_name: "Daryl",
            last_name: "Shy",
            address: {
                street: "2414 Beaumont Ave",
                apt: "Apt. 7",
                city: "Bronx",
                state: "NY",
                zip: "10458"
            },
            friends: [{
                name: "Thomas Bristow",
                best: false
            }, {
                name: "Ishmael Drennon",
                best: false
            }, {
                name: "Redd Bonet-Shy",
                best: false
            }, {
                name: "Mar'qez Thompson",
                best: false
            }],
            bestFriends: []
        };

        $scope.person2 = {
            first_name: "Andreas",
            last_name: "Sebastian",
            address: {
                street: "345 Clairmont Ave",
                apt: "Floor 2",
                city: "Brooklyn",
                state: "NY",
                zip: "10018"
            },
            friends: [{
                name: "Demita Haddon",
                best: false
            }, {
                name: "Lorandia Clark",
                best: false
            }, {
                name: "Sharon Osbourne",
                best: false
            }, {
                name: "Quibella Janet-Harris",
                best: false
            }],
            bestFriends: []
        };
    }

    app.controller('UserInfoController', uiCtrl);

    uiCtrl.$inject = ['$scope'];

})();