(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBoeFPsOwM2MVeabKJGWBgkvSoADzf1AfY",
        authDomain: "airnodapage-e6632.firebaseapp.com",
        databaseURL: "https://airnodapage-e6632.firebaseio.com",
        storageBucket: "airnodapage-e6632.appspot.com",
        messagingSenderId: "976631341118"
    };
    firebase.initializeApp(config);

    var app = angular.module("airnodaApp", ["ngRoute", 'airnodaAppComp']);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider
            .when("/about", {
                templateUrl: "components/about/About.html",
                controller: "AboutController",
                controllerAs: "aboutCtrl"
            })
            .when("/contact", {
                templateUrl: "components/contact/ContactMe.html",
                controller: "ContactController",
                controllerAs: "contactCtrl"
            })
            .otherwise({
                redirectTo: "/about"
            });

    });

}());