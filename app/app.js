'use strict';

// Declare app level module which depends on views, and components
angular.module('garcon', [
  'ngRoute',
  'garcon.home',
  'garcon.projects'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}]);
