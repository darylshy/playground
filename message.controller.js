(function(){

    let app = angular.module('app');

    class MyController{
        constructor($scope){
            let vm = this;
            vm.name = "Daryl Shy";
            vm.message = "Hello"
        }
        sayHello(){
            return `${this.message} ${this.name}`;
        }
    }

   app.controller('ClassController', MyController);

   MyController.$inject = ['$scope'];

})();