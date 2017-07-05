var app = angular.module('app',['globalapp','commonApp']);

app.controller('myController',['$scope','$http',function($scope,$http){
    $scope.dataset = [];
    //页面重新获取数据
    var reload = function(){
        $(".productCtrl").animate({"right":"-290"});
        $http.get('../assets/proDictionary.txt').success(function(response){
            $scope.proDictionary = response;
            $http.get('http://localhost:888/getprodata').success(function(response){
                $scope.dataset = response;
                // $http.get('../assets/commonDictionary.txt').success(function(response){
                //     console.log(response)
                //     $scope.commonDictionary = response;
                // })
                //获取供应商信息
                $http.get('http://localhost:888/zhgetdata').success(function(response){
                    $scope.supplierInfo = [];
                    for(var i=0;i<response.length;i++){
                        $scope.supplierInfo.push(response[i].supplierName )  
                    }
                    //获取类别信息
                    $http.get('http://localhost:888/zhgetSortdata').success(function(response){
                        $scope.categoryInfo = [];
                        for(var i=0;i<response.length;i++){
                            $scope.categoryInfo.push(response[i].sort )  
                        }
                        //获取单位信息
                        $http.get('http://localhost:888/zhgetUnitdata').success(function(response){
                            $scope.specificationInfo = [];
                            for(var i=0;i<response.length;i++){
                                $scope.specificationInfo.push(response[i].unit)  
                            }
                        })
                    })
                })
            })
        })    
    }
    //点击tr获取该行信息存放在控制区域
    $scope.getFn = function(){
        var obj = $(this).children().prevObject[0].obj;
        $scope.qrcode = obj.qrcode;
        $scope.proname = obj.proname;
        $scope.proprice = obj.proprice;
        $scope.specification = obj.specification;
        $scope.category = obj.category;
        $scope.sale = obj.sale;
        $scope.storage = obj.storage;
        $scope.suppliername = obj.suppliername;
        $scope.pd = obj.pd;

    }
    //进入页面发起请求获取数据    
    reload();
    //将控制区的信息添入数据库
    $scope.addFn = function(){
        $http.post('http://localhost:888/addprodata',{"qrcode":$scope.qrcode,"proname":$scope.proname,"proprice":$scope.proprice,"specification":$scope.specification,"category":$scope.category,"sale":$scope.sale,"storage":$scope.storage,"suppliername":$scope.suppliername,"pd":$scope.pd}).success(function(response){

        })
        reload();
    }
    //修改商品信息
    $scope.modFn = function(){
        $http.post('http://localhost:888/modprodata',{"qrcode":$scope.qrcode,"proname":$scope.proname,"proprice":$scope.proprice,"specification":$scope.specification,"category":$scope.category,"sale":$scope.sale,"storage":$scope.storage,"suppliername":$scope.suppliername,"pd":$scope.pd}).success(function(response){
            reload();
        })
        $(".productCtrl").animate({"right":"-290"});
        
    }
    //删除商品信息 
    $scope.delFn = function(){
        $http.post('http://localhost:888/delprodata',{"qrcode":$scope.qrcode,"proname":$scope.proname,"proprice":$scope.proprice,"specification":$scope.specification,"category":$scope.category,"sale":$scope.sale,"storage":$scope.storage,"suppliername":$scope.suppliername,"pd":$scope.pd}).success(function(response){
            
        })
        $(".productCtrl").animate({"right":"-290"});
        reload();
    }
    //返回信息列表区域，隐藏控制区域
    $scope.retFn = function(){
        $(".productCtrl").animate({"right":"-290"});
        reload();
    }



}])