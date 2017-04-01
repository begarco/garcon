'use strict';

angular.module('garcon.projects', ['ngRoute'])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });

  $locationProvider.html5Mode(true);
}])

.controller('ProjectsCtrl', [function() {

}]);