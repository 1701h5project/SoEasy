var  commonApp = angular.module('router', []);

commonApp.controller('pagetab', function ($scope, $stateParams) {
    $scope.name = 'pagetab';
    //$scope.href = location.href;
    //location.reload()
})
commonApp.controller('classifyM', function ($scope, $stateParams) {
    $scope.name = 'classifyM';
    //$scope.href = location.href;
    //location.reload()
    console.log(location.href)
})
commonApp.controller('page2', function ($scope, $stateParams) {
    $scope.name = 'zh-page2';
    //$scope.href = location.href;
    //location.reload()
    console.log(location.href)
})
commonApp.controller('page3', function ($scope, $stateParams) {
    $scope.name = 'zh-page3';
    //$scope.href = location.href;
    //location.reload()
    console.log(location.href)
})
commonApp.controller('page4', function ($scope, $stateParams) {
    $scope.name = 'zh-page4';
    //$scope.href = location.href;
    console.log(location.href)
})