var app = angular.module('app',['ngRoute', 'ngDialog']);

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

app.controller('cartpage', function($scope, $http, ngDialog) {

  $scope.products = null;
  $http.get('js/cart.json')
  //https://api.myjson.com/bins/pm0z
    .then(function successCallback(response) {
    $scope.products = response.data.productsInCart;
    //console.log(response.data.productsInCart.length);
   }, function errorCallback(response) {
   console.log("error");
   });
  //
  $scope.ShowNgDialog = function (product) {
    $scope.currentEditingProduct = product;
    ngDialog.open({
        template: 'view/product.html',
        appendClassName: 'ngdialog-custom',
        scope:$scope
    });
    //
  }
  //
  $scope.getSubTotal = function(){
    var products = $scope.products,
      index = 0.
    return products.reduce(function(total,product){
      return total + product.qty * product.p_price;
    },0);
  }
  //
  $scope.getEstimateTotal = function(){
    var products = $scope.products,
      index = 0.
    return products.reduce(function(total,product){
      return total + product.qty * product.p_price;
    },0);
  }
});
