(function () {

    var app = angular.module("airnodaApp");


    var AboutController = function ($scope, $location) {
        var AboutCTRL = this;

        AboutCTRL.profFn = 'profile';

        AboutCTRL.accomList = [
            {
                company: "Accenture Inc.",
                title: "Application Development Senior Analyst",
                date: "July 2014 - present",
                location: "Manila, Philippines",
                j_desc: "Developed a web app using AngularJS. Conducted KT and did technical design for new resources.",
                isHover: false
            },
            {
                company: "University of Santo Tomas",
                title: "Bachelor's Degree in Computer Science",
                date: "June 2010 - April 2014",
                location: "Manila, Philippines",
                j_desc: "#GoUSTe",
                isHover: false
            }
        ];

        AboutCTRL.ratings = [

            {
                skillName: "JavaScript",
                stars: [1, 2, 3, 4]
            },
            {
                skillName: "Git",
                stars: [1, 2, 3, 4],
                isHover: false
            },
            {
                skillName: "AngularJS",
                stars: [1, 2, 3],
                isHover: false
            },
            {
                skillName: "jQuery",
                stars: [1, 2, 3],
                isHover: false
            },
            {
                skillName: "NPM",
                stars: [1, 2, 3],
                isHover: false
            },
            {
                skillName: "HTML",
                stars: [1, 2],
                isHover: false
            },
            {
                skillName: "CSS",
                stars: [1, 2],
                isHover: false
            },
            {
                skillName: "Salesforce",
                stars: [1, 2],
                isHover: false
            },
            {
                skillName: "Gulp",
                stars: [1],
                isHover: false
            }

        ];

        AboutCTRL.testClick = function () {
            $location.path("/contact/");
        };
    };

    AboutController.$inject = ['$scope', '$location'];
    app.controller("AboutController", AboutController);

}());