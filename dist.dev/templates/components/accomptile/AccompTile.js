(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/accomptile/AccompTile.html',
    '<div class="arnd-sect-content"><div class="arnd-sect-box arnd-sect-boxcont"><h3 class="arnd-company">{{accomp.company}}</h3><h4 class="arnd-comp-title"><em>{{accomp.title}}</em></h4><h4 class="arnd-comp-title">{{accomp.date}}</h4><h4 class="arnd-comp-loc">{{accomp.location}}</h4><p>{{accomp.j_desc}}</p></div></div>');
}]);
})();
