(function () {

    var app = angular.module("airnodaApp");


    var HeaderController = function ($scope, $location, $anchorScroll) {
        var HeaderCtrl = this;
        
        HeaderCtrl.currentPage = $location.path(); 
        HeaderCtrl.changePage = function(moveTo){
            $location.path(moveTo);
            HeaderCtrl.currentPage = '/' + moveTo;
            $location.hash('view-id');
            $anchorScroll();
        };
    };
    
    HeaderController.$inject = [ '$scope', '$location', '$anchorScroll' ];
    app.controller("HeaderController", HeaderController);

}());