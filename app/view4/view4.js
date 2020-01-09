'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$http', function ($scope, $http)
{
    console.log('gets here');
    $scope.showcart = function()
    {
    console.log('comes here in cart');
        $http.get("http://127.0.0.1:5000/cart/").then
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
