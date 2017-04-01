'use strict';

angular.module('garcon.home', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });

  $locationProvider.html5Mode(true);
}])

.controller('HomeCtrl', [function() {

}]);