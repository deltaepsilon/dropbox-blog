'use strict';

angular.module('dropboxBlogApp', [
  'ngCookies',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          body: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }

      });
  });
