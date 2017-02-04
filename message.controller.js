(function(){
    let app = angular.module('app');

    app.controller('GuessingGameCtrl', function ($scope) {

           $scope.correct = Math.floor(Math.random() * 1000);
           $scope.currentguess = null;
           $scope.previousguess = null;
           $scope.message = ""


       $scope.colderWarmer = function (guess) {
           $scope.currentguess = guess;

           if($scope.currentguess === $scope.correct){
               $scope.message = "Correct!";
               return;
           }

           if($scope.currentguess && $scope.previousguess){
               if(Math.abs($scope.currentguess - $scope.correct) > Math.abs($scope.previousguess - $scope.correct)){
                   $scope.previousguess = $scope.currentguess;
                   $scope.message =  "Getting Colder";
               }else if(Math.abs($scope.currentguess - $scope.correct) < Math.abs($scope.previousguess - $scope.correct)){
                   $scope.previousguess = $scope.currentguess;
                   $scope.message =  "Getting Warmer";
               }else{
                   $scope.previousguess = $scope.currentguess;
                   $scope.message =  "Lukewarm";
               }
           }else{
               $scope.previousguess = $scope.currentguess;
               $scope.message =  "Lukewarm";
           }
       };

    });

})();