(function () {

    var app = angular.module("airnodaApp");


    var HeaderController = function ($scope, $location) {
        var HeaderCtrl = this;
        
        HeaderCtrl.currentPage = 'about'; 
        HeaderCtrl.changePage = function(moveTo){
            $location.path("/"+ moveTo +"/");
            HeaderCtrl.currentPage = moveTo;
        };
    };
    
    HeaderController.$inject = [ '$scope', '$location' ];
    app.controller("HeaderController", HeaderController);

}());