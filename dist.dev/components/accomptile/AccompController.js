(function () {

   var app = angular.module('airnodaApp');
    
   app.directive('accompTile', function(){
      
      return {
          restrict: 'E',
          templateUrl: 'components/accomptile/AccompTile.html',
          scope : {
              accomp : "="
          }
      };
                 
   });    

}());