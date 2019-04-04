import * as angular from 'angular';
import 'angular-route'
export const NG1AppModule = angular.module('ng1app.app', ['ngRoute']);

NG1AppModule.controller('ng1app.SampleController', ['$scope', function ($scope) {
  $scope.user = {name: "Lokesh"};

}])
.config(($routeProvider) => {
  $routeProvider
    .when('/home', {
      template: `Ng1 Home page`
    })
    .when('/customers', {
      template: `
      Downgraded Angular component inside angularJS Page
      <app-welcome></app-welcome>
      This is customer page
      `
    })
    .otherwise({
      template : "Welcome to hybrid application"
    });
})
.config(($locationProvider)=> {
  // $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
})

