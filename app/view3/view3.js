'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$http', function ($scope, $http)
{

    $scope.save = function()
    {
    console.log("value 1 : ",$scope.name.value);
    var myobject = {'name':$scope.name.value,'description':$scope.desc.value,'price':$scope.price.value}

Object.toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};

$http({
    method: 'POST',
    url: "http://127.0.0.1:5000/product/",
    data: Object.toparams(myobject),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    )
   }
}]);
