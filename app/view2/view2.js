'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function ($scope, $http)
{
    $scope.$watch('prod_id.value', function()
    {
        $http.get("http://127.0.0.1:5000/product/"+$scope.prod_id.value+"/").then
        (
            function successCallback(response)
            {
                $scope.result = "Record Found ";
                $scope.id = response.data.id;
                $scope.name = response.data.name;
                $scope.desc = response.data.description;
                $scope.price = response.data.price;
            },
            function errorCallback(response)
            {
                $scope.result = "Record Not found";
                $scope.id = "";
                $scope.name = "";
                $scope.desc = "";
                $scope.price = "";
            }
        )
    });


}]);