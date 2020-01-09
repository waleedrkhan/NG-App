'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ['$scope','$http', function ($scope, $http)
{
    $scope.addToCard = function(product){
        console.log('gets here : ', product.id);

        var myobject = {'name':product.name,'description':product.description,'price':product.price,
                        'product_id': parseInt(product.id, 10), "status":"Confirmed"}

        Object.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };

        $http({
            method: 'POST',
            url: "http://127.0.0.1:5000/cart/",
            data: Object.toparams(myobject),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
            ).then(
            function successCallback(response)
            {
                console.log('success : ',response);
            },
            function errorCallback(response)
            {
                console.log('failed : ',response);
            }
            )

    }

    $scope.getall = function()
    {
        $http.get("http://127.0.0.1:5000/product/").then
        (
            function successCallback(response)
            {
                $scope.resp = response.data;
            },
            function errorCallback(response)
            {
                console.log("error", response);
            }
            )
    }
}]);
