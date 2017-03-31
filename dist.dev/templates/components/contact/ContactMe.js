(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/contact/ContactMe.html',
    '<div class="container arnd-contact-section"><div class="row"><div class="col-md-12"><h1>Hello World!</h1></div></div></div>');
}]);
})();
