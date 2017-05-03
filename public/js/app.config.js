(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      }).state({
        name: 'about',
        url: '/about',
        component: 'about'
      }).state({
        name: 'projects',
        url: '/projects',
        component: 'projects'
      }).state({
        name: 'contact',
        url: '/contact',
        component: 'contact'
      }).state({
        name: 'imageinspire',
        url: '/imageinspire',
        component: 'imageinspire'
      }).state({
        name: 'ronme',
        url: '/ronme',
        component: 'ronme'
      }).state({
        name: 'secrets',
        url: '/secrets',
        component: 'secrets'
      }).state({
        name: 'shouldi',
        url: '/shouldi',
        component: 'shouldi'
      }).state({
        name: 'textsense',
        url: '/textsense',
        component: 'textsense'
      }).state({
        name: 'tinydev',
        url: '/tinydev',
        component: 'tinydev'
      }).state({
        name: 'uxplor',
        url: '/uxplor',
        component: 'uxplor'
      })
    $urlRouterProvider.otherwise('/')
  }
}());
