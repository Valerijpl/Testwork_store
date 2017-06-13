var app = angular.module("myApp", ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      url: '/list',
      templateUrl: "list.html"
    })
    .when('/products/:id', {
      url: '/products/ :id',
      controller: 'ProductController',
      templateUrl: 'product.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
