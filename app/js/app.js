var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/test.html"
    })
    .when("/drag", {
        templateUrl : "view/drag.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

app.controller('cartpage', function($scope, $http) {
  $scope.products = null;
  $http.get('https://api.myjson.com/bins/pm0z')
    .then(function successCallback(response) {

    $scope.products = response.data.productsInCart;
   }, function errorCallback(response) {
   console.log("error");
   });
});
