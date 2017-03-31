(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/header/header.html',
    '<div ng-controller="HeaderController as headerCtrl"><nav class="navbar navbar-default navbar-fixed-top"><div class="navbar-header"><div class="arnd-top-left"><button class="arnd-logo-button btn" ng-click="headerCtrl.changePage(\'about\')" type="button"><div class="arnd-logo-blk"><img class="arnd-logo-lockup-icon" alt="Airnoda" ng-src="ico/airnodapng.svg"><h2 class="arnd-logo-text">Airnoda</h2></div></button> <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar" class="navbar-toggle nav-btn arnd-logo-button btn visible-xs"><i class="fa fa-bars" aria-hidden="true"></i></button></div></div><div id="navbar" aria-expanded="true" class="arnd-nav-right navbar-collapse collapse"><ul class="nav navbar-nav visible-xs"><li ng-class="{\'active\' : headerCtrl.currentPage == \'/about\' }"><a href="#" ng-click="headerCtrl.changePage(\'about\')" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-user icon-label" aria-hidden="true"></i>About</a></li><li ng-class="{\'active\' : headerCtrl.currentPage == \'/contact\' }"><a href="#" ng-click="headerCtrl.changePage(\'contact\')" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-address-book icon-label" aria-hidden="true"></i>Contact</a></li></ul><ul class="nav navbar-nav navbar-right hidden-xs"><li ng-class="{\'active\' : headerCtrl.currentPage == \'/about\' }"><a href="#" ng-click="headerCtrl.changePage(\'about\')"><i class="fa fa-user icon-label" aria-hidden="true"></i>About</a></li><li ng-class="{\'active\' : headerCtrl.currentPage == \'/contact\' }"><a href="#" ng-click="headerCtrl.changePage(\'contact\')"><i class="fa fa-address-book icon-label" aria-hidden="true"></i>Contact</a></li></ul></div></nav></div>');
}]);
})();
