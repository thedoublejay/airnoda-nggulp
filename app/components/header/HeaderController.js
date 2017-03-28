(function () {

    var app = angular.module("airnodaApp");


    var HeaderController = function ($scope, $location) {
        var HeaderCtrl = this;
        
        HeaderCtrl.changePage = function(moveTo){
            $location.path("/"+ moveTo +"/");
        };
    };
    
    HeaderController.$inject = [ '$scope', '$location' ];
    app.controller("HeaderController", HeaderController);

}());