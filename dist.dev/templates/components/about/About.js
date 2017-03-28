(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/about/About.html',
    '<div class="container-fluid"><div class="arnd-body-message"><i class="fa fa-5x fa-wrench" aria-hidden="true"></i><h1>Site still in progress.</h1></div></div>');
}]);
})();
