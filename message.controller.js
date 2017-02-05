(function(){
    let app = angular.module('app');

    app.controller('GuessingGameCtrl', function ($scope) {

           $scope.correct = Math.floor(Math.random() * 1000);
           $scope.currentguess = null;
           $scope.message = "";
           $scope.$watch('currentguess', function (newValue, oldValue) {
               $scope.previousguess = oldValue;
           });


       $scope.colderWarmer = function (guess) {
           $scope.currentguess = guess;

           if($scope.currentguess === $scope.correct){
               $scope.message = "Correct!";
               return;
           }

           if($scope.currentguess && $scope.previousguess){
               if(Math.abs($scope.currentguess - $scope.correct) > Math.abs($scope.previousguess - $scope.correct)){
                   $scope.message =  "Getting Colder";
               }else if(Math.abs($scope.currentguess - $scope.correct) < Math.abs($scope.previousguess - $scope.correct)){
                   $scope.message =  "Getting Warmer";
               }else{
                   $scope.message =  "Lukewarm";
               }
           }else{
               $scope.message =  "Lukewarm";
           }
       };

    });

})();