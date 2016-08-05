var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/cart.html"
    })
    .when("/drag", {
        templateUrl : "view/drag.html"
    })
    .when("/green", {
        templateUrl : "view/test.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

app.controller('cartpage', function($scope, $http) {

  $scope.products = null;
  $http.get('js/cart.json')
  //https://api.myjson.com/bins/pm0z
    .then(function successCallback(response) {
    $scope.products = response.data.productsInCart;
    console.log(response.data.productsInCart.length);
   }, function errorCallback(response) {
   console.log("error");
   });
  //
});
