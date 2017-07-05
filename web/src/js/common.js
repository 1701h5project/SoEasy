var commonApp = angular.module('commonApp', []);//'navApp'

commonApp.value('baseUrl', 'http://192.168.1.75/course/api/api/')

commonApp.value('lan', function(){
    var lan = window.localStorage.getItem("lan");
    if(!lan){
        lan = "cn";
    }
    window.localStorage.setItem("lan", lan);
    return lan;
})

commonApp.directive('navid', ['$http', 'baseUrl', 'lan', function($http, baseUrl, lan){
    return {
        restrict: 'E',
        templateUrl: '../html/nav.html',
        replace: true,
        link: function(scope,elment,attr){ 
           // scope.lan = lan();  
        }
    }
}]);
// commonApp.config(function ($stateProvider, $urlRouterProvider) {
//     $stateProvider
//         .state("pagetab", {
//             url: "/pagetab",//当 url 为#/pagetab
//             templateUrl: "zh-mu.html",
//             controller: 'pagetab'
//         })
//         .state("classifyM", {
//             url: "/classifyM",
//             templateUrl: "classifyM.html",
//             controller: 'classifyM'
//         })
//         // .state("page2", {
//         //     url: "/page2",
//         //     templateUrl: "h5.html",
//         //     controller: 'page2'
//         // })
//         // .state("page3", {
//         //     url: "/page3",
//         //     templateUrl: "h6.html",
//         //     controller: 'page3'
//         // })
//         // .state("page4", {
//         //     url: "/page4",
//         //     templateUrl: "h7.html",
//         //     controller: 'page4'
//         // })
// })
