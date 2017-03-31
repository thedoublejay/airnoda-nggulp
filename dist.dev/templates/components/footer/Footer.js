(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/footer/Footer.html',
    '<div ng-controller="FooterController as footerCtrl"><div class="arnd-footer" style="text-align: center"><div class="col-md-12"><div class="footer-icons"><a href="https://www.facebook.com/jj.adonis" class="arnd-footer-icon"><i class="fa fa-facebook-official" aria-hidden="true"></i> </a><a href="https://twitter.com/jjidol" class="arnd-footer-icon"><i class="fa fa-twitter-square" aria-hidden="true"></i> </a><a href="https://www.instagram.com/thedoublejay/" class="arnd-footer-icon"><i class="fa fa-instagram" aria-hidden="true"></i> </a><a href="https://github.com/thedoublejay" class="arnd-footer-icon"><i class="fa fa-github-square" aria-hidden="true"></i> </a><a href="mailto:josejaimeadonis@gmail.com" class="arnd-footer-icon" style="padding-right: 0px"><i class="fa fa-envelope" aria-hidden="true"></i></a></div></div><div class="col-md-12"><h4 style="margin: 1em 0 0 0">© 2017 Jose Jaime Adonis</h4></div></div></div>');
}]);
})();
