(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/contact/ContactMe.html',
    '<h1>Contact Me!!! {{contactCtrl.number}}</h1>');
}]);
})();
