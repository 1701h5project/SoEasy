var Appcomponent = angular.module('commonApp',[]);


Appcomponent.value('baseUrl','http://localhost:888/')

Appcomponent.directive('stocontent',['$http','baseUrl',function($http,baseUrl){
    return {
        restrict:'E',
        templateUrl:'../html/storageContent.html',
        replace:true,
        link:function(scope,element,attr){
           
            $http.get(baseUrl+'defaultMsg').success(function(res){
                console.log(res)
                scope.data=res[0];
            })
        }
    }
}]);
