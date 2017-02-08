(function(){

    let app = angular.module('app');


    function MyMessage($scope, $rootScope) {
         let vm = this;
         $scope.name = "Daryl Shy";
         $scope.message = "Hello";
         $scope.sayHello = function() {
             return `${$scope.message} ${$scope.name}`;
         };
        console.log(`Root Scope: `, $rootScope);
         console.log(`MyMessage-scope:`, $scope)
    }

    function MyOtherMessage($scope, $rootScope) {
        let vm = this;
        $scope.name = "John Doe";
        $scope.message = "Wassup";
        $scope.sayHello = function() {
            return `${$scope.message} ${$scope.name}`;
        };

        console.log(`MyOtherMessage-scope:`, $scope);
    }

    app.controller('ClassController', MyMessage);
    MyMessage.$inject = ['$scope', '$rootScope'];

    app.controller('OtherController', MyOtherMessage);
    MyOtherMessage.$inject = ['$scope', '$rootScope'];















   //  class MyMessage{
   //      constructor($scope){
   //          let vm = this;
   //          vm.name = "Daryl Shy";
   //          vm.message = "Hello"
   //          vm.scope = $scope;
   //      }
   //      sayHello(){
   //          return `${this.message} ${this.name}`;
   //
   //      }
   //  }
   //
   // app.controller('ClassController', MyMessage);
   //
   // MyMessage.$inject = ['$scope'];

})();