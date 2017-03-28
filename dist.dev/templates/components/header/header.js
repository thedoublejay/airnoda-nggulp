(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/header/header.html',
    '<div ng-controller="HeaderController as headerCtrl"><nav class="navbar navbar-default navbar-fixed-top"><div class="navbar-header"><div class="arnd-top-left"><button class="arnd-logo-button btn" ng-click="headerCtrl.changePage(\'about\')" type="button"><div class="arnd-logo-blk"><img class="arnd-logo-lockup-icon" alt="Airnoda" ng-src="ico/airnodapng.svg"><h2 class="arnd-logo-text">Airnoda</h2></div></button></div></div><div class="arnd-nav-right navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li><a href="#" ng-click="headerCtrl.changePage(\'about\')"><i class="fa fa-user icon-label" aria-hidden="true"></i>About</a></li><li><a href="#" ng-click="headerCtrl.changePage(\'contact\')"><i class="fa fa-address-book icon-label" aria-hidden="true"></i>Contact</a></li></ul></div></nav></div>');
}]);
})();