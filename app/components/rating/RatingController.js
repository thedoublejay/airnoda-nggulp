(function () {

   var app = angular.module('airnodaApp');
    
   app.directive('ratingTile', function(){
      
      return {
          restrict: 'E',
          templateUrl: 'components/rating/RatingTile.html',
          scope : {
              rating : "="
          }
      };
                 
   });    

}());