var navApp = angular.module('navApp', []);

navApp.directive('naved', ['$scope','$http', function($scope,$http){
    return {
        restrict: 'E',
        templateUrl: 'nav.html',
        replace: true,
        link: function(scope, elment, attr){
            scope.dataset = [];
            console.log(2, scope)
            
            // $http.get(baseUrl + attr.api).success(function(response){
            //     scope.dataset = response.data;
            //     $http.get('commonDictionary.txt').success(function(response){
            //         scope.commonDictionary = response;
            //         if(attr.dictionary){
            //             $http.get(attr.dictionary).success(function(response){
            //                 scope.commonDictionary = Object.assign({}, scope.commonDictionary, response);
            //                 // console.log(scope.commonDictionary);
            //             })
            //         }                    
            //     })                
            // })

            // scope.lan = lan();
            // scope.cols = attr.columns ? attr.columns.split(',') : [];

            // scope.myFilter = function(data){
            //     return data;
            //     // return searchFactory.search(data, $scope.username)
            // }
        }
    }
}])
