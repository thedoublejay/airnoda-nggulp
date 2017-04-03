(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/contact/ContactMe.html',
    '<div class="arnd-contact-section animated slideInUp"><div class="section arnd-contact-head"><div class="container"><div class="row arnd-head-sub"><div class="col-md-12"><h4>Reach out and send a friendly hello</h4></div></div><div class="row"><div class="col-md-12"><h1>LET\'S HAVE A CHAT</h1></div></div><div class="row arnd-head-sub"><div class="col-md-12"><h4>Please feel free to reach out to me if you have any questions or if you have a job offer for me. We could also talk on other things. If you\'re a Mavs fan, we can talk all day about our favorite team.</h4></div></div><div class="row arnd-head-sub"><div class="col-md-12"><div class="footer-icons"><a href="https://www.facebook.com/jj.adonis" class="arnd-footer-icon"><i class="fa fa-facebook-official" aria-hidden="true"></i> </a><a href="https://twitter.com/jjidol" class="arnd-footer-icon"><i class="fa fa-twitter-square" aria-hidden="true"></i> </a><a href="https://www.instagram.com/thedoublejay/" class="arnd-footer-icon"><i class="fa fa-instagram" aria-hidden="true"></i> </a><a href="https://github.com/thedoublejay" class="arnd-footer-icon"><i class="fa fa-github-square" aria-hidden="true"></i> </a><a href="mailto:josejaimeadonis@gmail.com" class="arnd-footer-icon" style="padding-right: 0px"><i class="fa fa-envelope" aria-hidden="true"></i></a></div></div></div></div></div></div>');
}]);
})();
