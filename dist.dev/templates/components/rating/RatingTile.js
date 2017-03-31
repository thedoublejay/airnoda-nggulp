(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/rating/RatingTile.html',
    '<div class="arnd-skills-cont" ng-mouseover="rating.isHover = true" ng-mouseleave="rating.isHover = false" ng-class="{ \'animated pulse\' : rating.isHover }" ng-class-even="\'arnd-right-box\'"><div class="arnd-skills-box"><h3 class="arnd-skills-name">{{rating.skillName}}</h3><div class="arnd-rate-stars"><i class="fa fa-star icon-label" ng-repeat="star in rating.stars" aria-hidden="true"></i></div></div></div>');
}]);
})();
