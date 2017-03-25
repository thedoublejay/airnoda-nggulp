(function () {

    var app = angular.module("airnodaApp");


    var AboutController = function ($scope, $location) {
        var AboutCTRL = this;
        AboutCTRL.love = "Roan Marcelo";
        
        AboutCTRL.testClick = function(){
            $location.path("/contact/");
        };
    };
    
    AboutController.$inject = [ '$scope', '$location' ];
    app.controller("AboutController", AboutController);

}());