'use strict';

/**
 * @ngdoc overview
 * @name appGameApp
 * @description
 * # appGameApp
 *
 * Main module of the application.
 */
angular
  .module('appGameApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/snake', {
        templateUrl: 'views/snake.html',
        controller: 'SnakeCtrl',
        controllerAs: 'snake'
      })
      .when('/space', {
        templateUrl: 'views/space.html',
        controller: 'SpaceCtrl',
        controllerAs: 'space'
      })
      .when('/flappy', {
        templateUrl: 'views/flappy.html',
        controller: 'FlappyCtrl',
        controllerAs: 'flappy'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
